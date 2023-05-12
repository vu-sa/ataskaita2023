---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VU SA ataskaita"
  text: "už 2022-2023 m."
  tagline: "VU SA ataskaita už 2022-2023 m."
  actions:
    - theme: brand
      text: Skaityti!
      link: /vu-sa/strategija
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples
---

<!-- TODO: koks yra pats pirmas CTA nunešamas puslapis? -->

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import TestimonialElement from "../components/TestimonialElement1.vue";
import NumberStatistic from "../components/NumberStatistic.vue";
</script>

<section class="lg:px-2 px-1.5 isolate mb-8">
  <div class="max-w-5xl mx-auto p-4 relative">
    <figure class="flex flex-col md:flex-row">
      <figcaption class="leading-6 my-8 px-6 text-left md:w-1/2 order-2 md:order-1 flex flex-col">
          <p class="text-md font-medium italic mb-4">„Didžiuojuosi Organizacija – visų šitų ir krūvos dar neišvardintų dalykų nebūtume nuveikę be stiprių partnerysčių ir vieningo darbo kartu!</p>
          <p class="font-bold mb-4">Tariu didžiulį AČIŪ kiekvienai (-am) prisidėjusiai (-iam) prie to, kad studentams (-ėms) ir Organizacijai būtų geriau.“</p>
        <p class="text-sm font-bold">Neda Žutautaitė</p>
        <p class="opacity-80 text-sm">VU SA prezidentė</p>
      </figcaption>
      <video autoplay controls muted class="md:w-1/2 mx-auto rounded-lg order-1 md:order-2 z-20">
        <source src="/ataskaita-2023/video/Nedos-kalba.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </figure>
    <svg class="absolute w-32 h-32 text-[#bd28344a] dark:text-zinc-300/20 -left-12 -bottom-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M7 4v16l13 -8z"></path>
</svg>
  </div>
</section>

<section class="lg:px-2 px-1.5 isolate my-12">
  <div class="max-w-6xl mx-auto">
    <div class="mx-auto w-fit text-4xl font-bold">VU SA – tai:</div>
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
    <Carousel :transition="600" :autoplay="4500" pause-autoplay-on-hover>
      <Slide :index="0">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/rektorius.jpg" person-name="prof. Rimvydas Petrauskas" person-position="Vilniaus universiteto Rektorius" href="/sveikinimai" button-text="Sveikinimo kalba">
        Sveikinu Vilniaus universiteto Studentų atstovybę, kuri prisiima pareigą
          ir atsakomybę suvokti, derinti ir ginti labai didelės ir įvairios
          studentų bendruomenės interesus, siekdama sukurti kuo geresnes sąlygas
          kiekvienam studentui, o kartu prisidėdama prie visos valstybės ir
          visuomenės pažangos.“
        </TestimonialElement>
      </Slide>
      <Slide :index="1">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/MP-portretas.jpg" person-name="Ingrida Šimonytė" person-position="Lietuvos Respublikos Ministrė Pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
        Džiaugiuosi ir didžiuojuosi, kad VU SA neliko stebėtoja – ėmėtės
          globoti kiekvieną ukrainietį (-ę) studentą (-ę), įstojusį (-ią) į VU
          šeimą, ieškojote jiems namų ir padėjote jaustis visapusiškai saugiau
          nežinomybės ir neapibrėžtumo situacijoje.“
        </TestimonialElement>
      </Slide>
      <Slide :index="2">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/20211231SMM0974.jpeg" person-name="Jurgita Šiugždinienė" person-position="LR Švietimo, mokslo ir sporto ministrė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Aktyviai atstovaudami savo bendruomenei, suteikiate jai balsą bei
        galimybes veikti ir tobulėti. Taip prisidedate ne tik prie studentijos,
        bet ir visos Lietuvos gerovės -- juk mūsų šalies ateitį kuria veržlūs ir
        atviri naujovėms jauni žmonės.“
        </TestimonialElement>
      </Slide>
      <Slide :index="3">
        <TestimonialElement class="p-4" img-src="/ataskaita-2023/img/sveikinimai/vcn.jpeg" person-name="Viktorija Čmilytė-Nielsen" person-position="LR Seimo Pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Kol yra tokių motyvuotų žmonių, kokie esate Jūs, galime būti ramūs dėl
        Lietuvos, Europos ir pasaulio likimo.Linkiu Jūsų bendruomenei įvairiapusės sėkmės. Nenustokite tobulėti,
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
        „Tikiu, kad technologinių ir socialinių naujovių dermė prisidės prie akademinės etikos kultūros transformacijų. Čia Jūsų visų įsitraukimas yra itin laukiamas. Svarbiausia išlikti proaktyviems ir kūrybiškiems -- tik taip prisidėsite prie tarptautinių akademinės etikos standartų puoselėjimo.“
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
