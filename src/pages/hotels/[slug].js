import { useRouter } from "next/router";
import { hotels } from "../hotels";

export default function Page() {
  const router = useRouter();

  const [hotel] = hotels.filter(
    (item) => item.id === Number(router.query.slug)
  );

  console.log(hotel);
  return <p>Post: {hotel?.title}</p>;
}
