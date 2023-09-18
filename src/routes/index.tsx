import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>NACS Demo Store</Title>
             <div style="position: absolute;border:none;margin: auto; left:0; right:0; width:450px">
          <img src="../../../phone.png" style="z-index:1 ;position:absolute"   />
          <iframe src="https://demo.nopcommerce.com/" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="z-index: 2;position: relative;width: 310px;left:53px;height: 640px;top: 60px;border-bottom-right-radius: 30px;border-bottom-left-radius: 30px;border:0"></iframe>
      </div>
    </main>
  );
}
