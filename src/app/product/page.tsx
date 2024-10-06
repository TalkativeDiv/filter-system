import { redirect } from "next/navigation";

export default function Product() {
  // no user should be *here* specifically, they should have an id in the url
  redirect("/products");
}
