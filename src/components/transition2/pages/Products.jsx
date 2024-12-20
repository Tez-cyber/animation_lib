import { Container } from "../components/Container"
import Product from "../components/product"
import { Title } from "../components/Title"

export const Products = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Title>
        Products
      </Title>
      <main className="flex gap-10 ">
        <Product title="Box 1"  />
        <Product title="Box 2" delay={.2} />
        <Product title="Box 3" delay={.4} />
      </main> 
    </div>
  )
}
