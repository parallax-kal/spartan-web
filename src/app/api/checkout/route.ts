import { IProduct } from "@/types";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const POST = async (request: Request) => {
  const body = await request.json();
  console.log({body})

  try {
    // const requestOrigin = request.headers.get("origin")!;

    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: body.map((item: IProduct &{quantity: number}) => {

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [`${process.env.NEXT_PUBLIC_SERVER_URL}/${item.image}`],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cart`,
    };

    const session = await stripe.checkout.sessions.create(params);

    console.log(session);

    return new Response(JSON.stringify(session));
  } catch (error: any) {
    console.log(error)
    return new Response(error.message, {
      status: error.statusCode || 500,
    });
  }
};
