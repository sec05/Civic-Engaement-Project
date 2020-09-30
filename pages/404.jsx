import Layout from "../components/Layout"
import Link from "next/link"

const def404 = () =>{
    return(
        <Layout>
            <h1>Sorry that page doesn't exist! <Link href="/">Home</Link></h1>
        </Layout>
    )
}
export default def404