---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VU SA ataskaita"
  text: "už 2022-2023 m."
  tagline: "Vieningai Už Studentų Ateitį!"
  image:
    light:
      src: ./img/logos/vusa-lt-b.png
      alt: VU SA
    dark: 
      src: ./img/logos/vusa-lt-w.png
      alt: VU SA
  actions:
    - theme: brand
      text: Sužinok apie šių metų veiklą!
      link: /mvp/strateginiai
    - theme: alt
      text: Praėjusių metų ataskaita
      link: https://vusa.lt/ataskaita-2022
---

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import TestimonialElement from "../components/TestimonialElement1.vue";
import NumberStatistic from "../components/NumberStatistic.vue";
import ElementWithBg from "../components/ElementWithBg.vue";
import PersonAvatar from "../components/PersonAvatar.vue";
import { biuras } from "../data/bendruomene.ts";

</script>

<section class="lg:px-2 px-1.5 isolate mb-8">
  <div class="max-w-5xl mx-auto p-4 relative">
    <figure class="flex flex-col md:flex-row">
      <figcaption class="leading-6 my-8 px-6 text-left md:w-1/2 order-2 md:order-1 flex flex-col">
          <p class="text-md font-medium italic mb-4">„Didžiuojuosi Organizacija – visų šitų ir krūvos dar neišvardintų dalykų nebūtume nuveikę be stiprių partnerysčių ir vieningo darbo kartu!</p>
          <p class="font-bold mb-4">Tariu didžiulį AČIŪ kiekvienai (-am) prisidėjusiai (-iam) prie to, kad studentams (-ėms) ir Organizacijai būtų geriau.“</p>
        <PersonAvatar :src="biuras[0].avatar" size="small">
          <p class="text-sm font-bold">Neda Žutautaitė</p>
          <p class="opacity-80 text-sm">VU SA prezidentė</p>
        </PersonAvatar>
      </figcaption>
      <video playsinline autoplay controls muted loop class="md:w-1/2 mx-auto order-1 md:order-2 z-20 shadow-lg object-cover aspect-video">
        <source src="/video/Nedos-kalba.mp4" type="video/mp4">
        <track default src="/ataskaita-2023/video/Nedos-kalba-LT.vtt" kind="subtitles" srclang="lt" label="Lietuvių">
        <track src="/ataskaita-2023/video/Nedos-kalba-EN.vtt" kind="subtitles" srclang="lt" label="English">
        Your browser does not support the video tag.
      </video>
    </figure>
    <svg class="absolute w-32 h-32 text-[#bd28344a] dark:text-zinc-300/20 left-0 md:-left-8 -top-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M7 4v16l13 -8z"></path>
</svg>
  </div>
</section>

<section class="lg:px-2 px-1.5 isolate my-12">
  <div class="max-w-6xl mx-auto">
    <p class="mx-auto w-fit text-4xl font-bold">VU SA – tai:</p>
    <div class="flex flex-col md:flex-row my-12 mx-auto justify-center gap-8">
      <NumberStatistic :end-number="34">metai Vilniaus Universiteto studentų (-čių atstovavimo)</NumberStatistic>
      <NumberStatistic :end-number="15">VU SA padalinių 3 miestuose</NumberStatistic>
      <NumberStatistic :end-number="20"> VU SA projektų, klubų ir programų </NumberStatistic>
      <NumberStatistic :end-number="1100" > dėl bendro tikslo veikiančių narių</NumberStatistic>
    </div>
  </div>
</section>

<section class="lg:px-2 px-1.5 isolate">
  <div class="max-w-6xl mx-auto">
    <Carousel :transition="700" :autoplay="10000" pause-autoplay-on-hover wrap-around>
      <Slide :index="0">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/rektorius.jpg" person-name="prof. Rimvydas Petrauskas" person-position="Vilniaus universiteto Rektorius" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Sveikinu Vilniaus universiteto Studentų atstovybę, kuri prisiima pareigą
          ir atsakomybę suvokti, derinti ir ginti labai didelės ir įvairios
          studentų bendruomenės interesus, siekdama sukurti kuo geresnes sąlygas
          kiekvienam studentui, o kartu prisidėdama prie visos valstybės ir
          visuomenės pažangos.“
        </TestimonialElement>
      </Slide>
      <Slide :index="1">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/MP-portretas.jpg" person-name="Ingrida Šimonytė" person-position="Lietuvos Respublikos Ministrė Pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Džiaugiuosi ir didžiuojuosi, kad VU SA neliko stebėtoja – ėmėtės
          globoti kiekvieną ukrainietį (-ę) studentą (-ę), įstojusį (-ią) į VU
          šeimą, ieškojote jiems namų ir padėjote jaustis visapusiškai saugiau
          nežinomybės ir neapibrėžtumo situacijoje.“
        </TestimonialElement>
      </Slide>
      <Slide :index="2">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/20211231SMM0974.jpeg" person-name="Jurgita Šiugždinienė" person-position="LR Švietimo, mokslo ir sporto ministrė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Aktyviai atstovaudami savo bendruomenei, suteikiate jai balsą bei
        galimybes veikti ir tobulėti. Taip prisidedate ne tik prie studentijos,
        bet ir visos Lietuvos gerovės – juk mūsų šalies ateitį kuria veržlūs ir
        atviri naujovėms jauni žmonės.“
        </TestimonialElement>
      </Slide>
      <Slide :index="3">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/vcn.jpeg" person-name="Viktorija Čmilytė-Nielsen" person-position="LR Seimo Pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Kol yra tokių motyvuotų žmonių, kokie esate Jūs, galime būti ramūs dėl
        Lietuvos, Europos ir pasaulio likimo. Linkiu Jūsų bendruomenei įvairiapusės sėkmės. Nenustokite tobulėti,
        mokytis ir džiaugtis. Būkite drąsūs, tvirti ir vieningi!“
        </TestimonialElement>
      </Slide>
      <Slide :index="4">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/zukauskas.jpeg" person-name="prof. Artūras Žukauskas" person-position="LR Seimo Švietimo ir mokslo komiteto pirmininkas" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Jūsų pastangos ryškiai atsispindi kuriant kokybišką aukštojo mokslo aplinką Lietuvoje. Tikiu, kad nuo Jūsų vertybių, pastangų, talento  bei bendradarbiavimo priklauso ne tik asmeninių siekių įgyvendinimas, bet ir visos mūsų šalies ateitis.“
        </TestimonialElement>
      </Slide>
      <Slide :index="5">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/DSC01335.jpg" person-name="prof. Eglė Lastauskienė" person-position="Vilniaus universiteto Senato pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Matant Jūsų
          motyvaciją, užsidegimą, atsakomybę, naujas idėjas, didelį darbą ir
          asmenybių brandą galima drąsiai teigti, kad Lietuvos ateitis yra
          saugiose rankose.“
        </TestimonialElement>
      </Slide>
      <Slide :index="6">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/Radzeviciene.5M5A1668r_3.jpg" person-name="dr. Eglė Radzevičienė" person-position="Vilniaus universiteto Tarybos pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Visos VU Tarybos vardu noriu jus, studentai, paskatinti nesustoti,
          toliau siūlyti savo idėjas, savo universiteto viziją, nes būtent tarp
          Alma mater sienų įgyta patirtis suformuoja mus kaip socialiai aktyvias
          asmenybes ir profesionalus.“
        </TestimonialElement>
      </Slide>
      <Slide :index="7">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/ik.jpeg" person-name="Irena Krivienė" person-position="VU bibliotekos generalinė direktorė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Dėkodama už nuoširdų bendradarbiavimą, linkiu išsaugoti jaunatvišką
          maksimalizmą, aktyvumą ir atvirumą, surasti Jūsų lūkesčius atitinkančius
          karjeros ir asmeninio gyvenimo kelius. Ir kur keliai benuvestų, niekada
          nepraraskite ryšio su savo alma mater. Visada esate ir būsite laukiami
          (-os) Bibliotekoje!“
        </TestimonialElement>
      </Slide>
      <Slide :index="8">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/dr.-Loreta-Tauginien%C4%97.MART1397B.jpg" person-name="dr. Loreta Tauginienė" person-position="Akademinės etikos ir procedūrų kontrolierė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Tikiu, kad technologinių ir socialinių naujovių dermė prisidės prie akademinės etikos kultūros transformacijų. Čia Jūsų visų įsitraukimas yra itin laukiamas. Svarbiausia išlikti proaktyviems ir kūrybiškiems – tik taip prisidėsite prie tarptautinių akademinės etikos standartų puoselėjimo.“
        </TestimonialElement>
      </Slide>
      <Slide :index="9">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/IMG_20230114_124623_963.jpg" person-name="Arminas Varanauskas" person-position="Žinių ekonomikos forumo direktorius" href="/sveikinimai" button-text="Sveikinimo kalba">
       „... AČIŪ, kad šalia įprastų gerų ir
        svarbių darbų studentams, išdrįsote būti pavyzdžiu kitoms organizacijoms
        bei spręsti ne tik patogias problemas.“
        </TestimonialElement>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</section>

<section class="lg:px-2 px-4 isolate mt-16">
    <p class="mx-auto w-fit text-4xl font-bold my-8">Metų <span class="italic">istorijos</span></p>
  <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">
    <ElementWithBg href="/kokybiskos-studijos/vu#vu-senatas" class="h-[36rem]" img-src="/ataskaita-2023/img/renginiai/biblioteka/FC0BE34F-EA5F-43D7-A5C4-4BDB81CFD4D1.jpg" :color-classes="['bg-[rgba(60,12,6,0.95)] dark:bg-zinc-900/90']">
      <template #title>Individualios studijos</template>
      <p class="mb-4">2022 m. birželio 21 d. VU Senate patvirtinti <strong>nauji Studijų nuostatai</strong>, kurie įtvirtino individualiąsias studijas. </p>
      <p class="mb-4">Kiekviename bakalauro programų studijų programų komitete atnaujinti studijų programų planai. Teikti pasiūlymai akademinio studentų konstulavimo sistemai individualių studijų kontekste. </p>
      <p class="mb-4"> Nuo 2023 m. į bakalauro, vientisąsias studijas stojantys (-čios) studentai (-ės) studijuos atnaujintose programose, kur ne mažiau kaip 60 ECTS kreditų (jei studijos trunka 4 m.) bus skirtos laisvam individualiam studento (-ės) pasirinkimui.</p>
      <p>Teikti pasiūlymai akademinio studentų konstulavimo sistemai individualių studijų kontekste. </p>
    </ElementWithBg>
    <ElementWithBg href="/stipri-organizacija/projektai#projektas-„ecstra-employability-competencies-for-students-through-implementation-and-recognition-of-activities" class="h-[36rem]" img-src="/ataskaita-2023/img/renginiai/tvarumo-festivalis/_DSC0255.jpg" :color-classes="['bg-[rgba(60,45,17,0.98)] dark:bg-zinc-900/90']">
      <template #title>Studentų (-čių) skatinimas kurti savo iniciatyvas</template>
      <p class="mb-4">Aplinka, kurioje studentai (-ės) gali kurti savo iniciatyvas ir atrasti sau artimą bendruomenę – visuomet buvo viena iš mūsų svarbiausių temų. Per šiuos metus užbaigtas ECSTRA projektas. </p>
      <p class="mb-4"> Sukurta VU SA paramos ir skatinimo sistema iniciatyvų kūrimui ir plėtojimui. Teikti pasiūlymai neformaliu būdu įgytų kompetencijų užskaitymo sistemai Vilniaus universitete.</p>
    </ElementWithBg>
    <ElementWithBg href="/darni-bendruomene/integracija" class="h-[36rem]" img-src="/ataskaita-2023/img/renginiai/gimtadienis/Gabija_Matkutė_VUSA_(95).jpg" :color-classes="['bg-[rgba(38,25,17,0.95)] dark:bg-zinc-400/80']">
      <template #title>Užsienio studentai (-ės) – lygiaverčiai (-tės) bendruomenės nariai (-ės)</template>
      <p class="mb-4">Tarptautiškumo svarba Universitete vis didėja. Užsienio studentų (-čių) skaičius – auga.</p>
      <p class="mb-4"> Siekdami gerinti užsienio studentų (-čių) patirtį Vilniaus universitete rūpinomės jų integracija tiek organizuojant pirmakursių stovyklas, tiek įvairius, vietinių ir užsienio studentų (-čių) bendruomenes suburiančius renginius anglų kalba. </p>
      <p>Organizacijos vidinę veiklą pritaikėme užsienio studentų (-čių) įsitraukimui, pasirengėme dvikalbės komunikacijos gaires. Skirtingais lygmenimis teikėme pasiūlymus dėl užsieniečiams (-ėms) studentams (-ėms) teikiamų paslaugų tobulinimo, jų teisinės padėties, sveikatos apsaugos gerinimo bei integracijos ne tik į Universitetą, bet ir apskritai šalyje, sėkmingai paskatinome sprendimų priėmėjus (-as) atsisakyti teisinių darbo trukmės apribojimų užsieniečiams (-ėms). </p>
    </ElementWithBg>
    <ElementWithBg href="/vu-sa/parlamentas#priimta-vu-sa-tvarumo-deklaracija" class="h-[36rem]" img-src="/ataskaita-2023/img/renginiai/gimtadienis/Gabija_Matkutė_VUSA_(193).jpg" :color-classes="['bg-[rgba(24,39,17,0.95)] dark:bg-neutral-900/90']">
      <template #title>Žalias universitetas</template>
      <p class="mb-4">Rudenį Organizacijoje su kiekvieno (-os) VU SA nario (-ės) įsipareigojimu savo veikla prisidėti prie Žalio universiteto kūrimo bei žalumo principų integravimo ne tik Organizacijos rėmuose, bet ir visame Universitete, pasirašėme Tvarumo deklaraciją. </p>
      <p class="mb-4">VU SA Tvarumo deklaracija ir kaip mūsų strateginis susitarimas patvirtinta VU SA Parlamente. O dar svarbiau – Žalio universiteto tema pagaliau ėmė skambėti koridoriuose Siekiant kurti Žalią universitetą, bendruomenės įsitraukimas yra labai svarbus, todėl inicijavome ambasadorių tinklą (EKO)LOGIŠKAI, kurio nariai (-ės) ne tik plečia savo žinias klimato kaitos tematikoje, turi galimybę susipažinti su studentais (-ėmis) iš kitų padalinių, turinčiais (-iomis) tų pačių interesų, bei kartu įgyvendinti savo iniciatyvas. </p>
      <p>Taip pat skatinome Universitetą priimti strateginius sprendimus žalumo link, prisidėdami prie VU Žaliojo kurso kūrimo.</p>
    </ElementWithBg>
    <ElementWithBg href="/stipri-organizacija/projektai#geruju-uzsienio-praktiku-pritaikymas-socialinei-dimensijai-lietuvos-aukstajame-moksle-igyvendinti-mazinant-barjerus-su-kuriais-susiduria-maziau-reprezentuojamos-aukstajame-moksle-grupes" class="lg:col-span-2 lg:w-1/2 mx-auto h-[36rem]" img-src="/ataskaita-2023/img/renginiai/pavasario-mokymai/IMG_7243.jpg" :color-classes="['bg-gradient-to-tr from-[rgba(28,39,17,0.95)] to-[rgba(50,12,6,0.95)] dark:bg-slate-900/90']">
      <template #title>Iniciatyva „Aukštasis mokslas nėra PER aukštai“ </template>
      <p class="mb-4">Iniciatyvos metu buvo suburtas 48 studentų (-čių) ambasadorių tinklas. Studentai (-ės) ambasadoriai (-ės) nuvyko į 22 regionines  mokyklas, kuriose susitiko su moksleiviais (-ėmis) ir pasakojo apie aukštojo mokslo galimybes. Iš viso susitikimuose dalyvavo 771 moksleivis (-ė). </p>
      <p class="mb-4"> Kartu su Lietuvos Respublikos Švietimo, mokslo ir sporto ministerija suorganizuota socialinės dimensijos Lietuvos aukštajame moksle konferencija. Jos metu gilintasi į studentų (-čių) socialinę situaciją („Eurostudent“ tyrimo kontekste), aptartos mažiau reprezentuojamos Lietuvos aukštajame moksle grupės, jų padėtis ir barjerai. </p>
      <p>Siekiant praktinės naudos Lietuvos socialinės dimensijos plano rengimo procese, kartu su kviestiniais ekspertais (-ėmis) gilintasi į Austrijos prieinamumo strategijos atvejį ir patirtį bei pristatytas socialinės dimensijos plano Lietuvoje pirminis projektas, kuriam konferencijos dalyviai (-ės) dirbtuvių metu generavo pasiūlymus. </p>
    </ElementWithBg>
  </div>
</section>
