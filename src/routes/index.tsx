import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>NACS Demo Store</Title>
        <div style="position: absolute;border:none;margin: auto; left:0; right:0; width:520px; height: 950px;top: 0;bottom: 0;">
          <img src="iphone.png" style="z-index:1 ;position:absolute"   />
            <iframe src="https://demostorewp.bottlecapps.com/" style="z-index:2;position:relative;width:392px;left:60px;height:848px;top:47px;border-radius:40px;border:0"></iframe>
        </div>
    </main>
  );
}
