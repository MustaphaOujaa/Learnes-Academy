import Welcome from "@/components/Welcome/Welcome";
import Activites from "@/components/Activites/Activites";
import Events from "@/components/Events/events";
import Support from "@/components/StudentSupport/Support";

export default function StudentLife() {
  return (
    <main>
      <Welcome 
        btn='Enriching Student Life' 
        welcome='Embracing Learning with Discovery and Joy' 
        text='Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a childs development'
      />
      <Activites />
      <Events />
      <Support />
    </main>
  );
}
