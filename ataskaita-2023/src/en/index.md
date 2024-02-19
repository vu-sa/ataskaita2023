---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VU SR report"
  text: "for 2022-2023"
  tagline: "VU SR report for 2022-2023"
  image:
    light:
      src: ../img/logos/vusa-en-b.png
      alt: VU SA
    dark: 
      src: ../img/logos/vusa-en-w.png
      alt: VU SA
  actions:
    - theme: brand
      text: Learn about this year!
      link: /en/mvp/strateginiai
    - theme: alt
      text: Last year's report
      link: https://ataskaita2022.vusa.lt/en/
---

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import TestimonialElement from "../../components/TestimonialElement1.vue";
import NumberStatistic from "../../components/NumberStatistic.vue";
import ElementWithBg from "../../components/ElementWithBg.vue";
import PersonAvatar from "../../components/PersonAvatar.vue";
import { biuras } from "../../data/bendruomene.ts";

</script>

<section class="lg:px-2 px-1.5 isolate mb-8">
  <div class="max-w-5xl mx-auto p-4 relative">
    <figure class="flex flex-col md:flex-row">
      <figcaption class="leading-6 my-8 px-6 text-left md:w-1/2 order-2 md:order-1 flex flex-col">
          <p class="text-md font-medium italic mb-4">I am proud of the Organization - we would not have done all these and a bunch of things that have not yet been listed without strong partnerships and united work together!</p>
          <p class="font-bold mb-4">So I say a huge THANK YOU to everyone who has contributed to making it better for the students and the Organization.“</p>
        <PersonAvatar :src="biuras[0].avatar" size="small">
          <p class="text-sm font-bold">Neda Žutautaitė</p>
          <p class="opacity-80 text-sm">VU SR president</p>
        </PersonAvatar>
      </figcaption>
      <video playsinline autoplay controls muted loop class="md:w-1/2 mx-auto rounded-lg order-1 md:order-2 z-20 shadow-lg object-cover aspect-video">
        <source src="/video/Nedos-kalba.mp4" type="video/mp4">
        <track src="/video/Nedos-kalba-LT.vtt" kind="subtitles" srclang="lt" label="Lietuvių">
        <track default src="/video/Nedos-kalba-EN.vtt" kind="subtitles" srclang="lt" label="English">
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
    <p class="mx-auto w-fit text-4xl font-bold">VU SR – it is:</p>
    <div class="flex flex-wrap my-12 mx-auto justify-center gap-8">
      <NumberStatistic :end-number="34">years of representing Vilnius University students</NumberStatistic>
      <NumberStatistic :end-number="15">VU SR units in 3 cities</NumberStatistic>
      <NumberStatistic :end-number="20"> VU SR projects, clubs and programs </NumberStatistic>
      <NumberStatistic :end-number="1100" > members acting for a common purpose</NumberStatistic>
    </div>
  </div>
</section>

<section class="lg:px-2 px-1.5 isolate">
  <div class="max-w-6xl mx-auto">
    <Carousel :transition="700" :autoplay="10000" pause-autoplay-on-hover wrap-around>
      <Slide :index="0">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/rektorius.jpg" person-name="prof. Rimvydas Petrauskas" person-position="Rector of Vilnius University" href="/sveikinimai" button-text="Read more">
        I congratulate Vilnius University Students' Representation, which
assumes the responsibility of understanding, coordinating, and defending
the interests of a large and diverse student community in order to
create the best possible conditions for every student and contribute to
the progress of the entire state and society.“
        </TestimonialElement>
      </Slide>
      <Slide :index="1">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/MP-portretas.jpg" person-name="Ingrida Šimonytė" person-position="Prime Minister of the Republic of Lithuania" href="/sveikinimai" button-text="Read more">
        „I am happy and proud that Vilnius University Students' Representation
(VU SR) has not remained a bystander in the face of adversity. You have
embraced and cared for every Ukrainian student who has become part of
the VU family. You have provided them with a sense of belonging and
security amidst the uncertainties they face.“
        </TestimonialElement>
      </Slide>
      <Slide :index="2">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/20211231SMM0974.jpeg" person-name="Jurgita Šiugždinienė" person-position="Minister for Education, Science and Sport" href="/sveikinimai" button-text="Read more">
        „By actively representing your community, you give it a voice and
opportunities to act and develop. In this way, you contribute not only
to the well-being of students, but also to the well-being of Lithuania
as a whole – after all, the future of our country is created by
energetic and open to innovations of young people.“
        </TestimonialElement>
      </Slide>
      <Slide :index="3">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/vcn.jpeg" person-name="Viktorija Čmilytė-Nielsen" person-position="Speaker of the Seimas" href="/sveikinimai" button-text="Read more">
        „As long as there are motivated people like you, we can be sure of the
fate of Lithuania, Europe and the world. I wish your community every success. Do not stop improving, learning,
and rejoicing. Be bold, strong and united!“
        </TestimonialElement>
      </Slide>
      <Slide :index="4">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/zukauskas.jpeg" person-name="prof. Artūras Žukauskas" person-position="Chairman of the Education and Science Committee of the Seimas of the Republic of Lithuania" href="/sveikinimai" button-text="Read more">
        Your efforts are vividly reflected in creating a high-quality higher education environment in Lithuania. I believe that not only the realization of personal aspirations, but also the future of our entire country depends on your values, efforts, talent and cooperation.“
        </TestimonialElement>
      </Slide>
      <Slide :index="5">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/DSC01335.jpg" person-name="prof. Eglė Lastauskienė" person-position="Chairwoman of the Vilnius University Senate" href="/sveikinimai" button-text="Read more">
        „Seeing your
motivation, enthusiasm, responsibility, new ideas, great work, and
maturity of personalities, we can safely say that the future of
Lithuania is in safe hands.“
        </TestimonialElement>
      </Slide>
      <Slide :index="6">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/Radzeviciene.5M5A1668r_3.jpg" person-name="dr. Eglė Radzevičienė" person-position="Chairwoman of the Council of Vilnius University" href="/sveikinimai" button-text="Read more">
        „On behalf of the entire VU Council, I want to encourage you, students, not to stop, to continue to offer your ideas, the vision of your university, because it is the experience gained between the walls of the Alma mater that forms us as socially active personalities and professionals.“
        </TestimonialElement>
      </Slide>
      <Slide :index="7">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/ik.jpeg" person-name="Irena Krivienė" person-position="Director General of Vilnius University Library" href="/sveikinimai" button-text="Read more">
        „I am very
thankful for your sincere cooperation and I would like to wish you to
preserve this youthful maximalism, energy and openness and I hope that
you will find a career and personal life path that will meet your
expectations. And wherever you go, please keep in touch with your *alma mater* and
remember that you are always welcome at our Library!“
        </TestimonialElement>
      </Slide>
      <Slide :index="8">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/dr.-Loreta-Tauginien%C4%97.MART1397B.jpg" person-name="dr. Loreta Tauginienė" person-position="Controller of Academic Ethics and Procedures" href="/sveikinimai" button-text="Read more">
        „I believe that the combination of technological and social innovations will contribute to the transformations of the culture of academic ethics. Here, the involvement of all of you is very welcome. The most important thing is to remain proactive and creative – only in this way will you contribute to the development of international standards of academic ethics.“
        </TestimonialElement>
      </Slide>
      <Slide :index="9">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/IMG_20230114_124623_963.jpg" person-name="Arminas Varanauskas" person-position="Knowledge Economy Forum director" href="/sveikinimai" button-text="Read more">
       „... THANK YOU that in addition to the usual good and important works for students, you dared to be an example to other organizations and solve not only convenient problems.“
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
    <p class="mx-auto w-fit text-4xl font-bold my-8"><span class="italic">Stories</span> of the year</p>
  <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">
    <ElementWithBg href="/en/kokybiskos-studijos/vu#vu-senate" button-text="Read more" class="h-[36rem]" img-src="/img/renginiai/biblioteka/FC0BE34F-EA5F-43D7-A5C4-4BDB81CFD4D1.jpg" :color-classes="['bg-[rgba(60,12,6,0.95)] dark:bg-zinc-900/90']">
      <template #title>Individual studies </template>
      <p class="mb-4">On June 21st, 2022, VU Senate approved new Study Regulations, which established individual studies. </p>
      <p>From 2023 onwards, students enrolled in bachelor's and integral studies will study in updated programs, where at least 60 ECTS credits (if studies last for 4 years) will be allocated ...</p>
    </ElementWithBg>
    <ElementWithBg href="/en/stipri-organizacija/projektai" button-text="Read more" class="h-[36rem]" img-src="/img/renginiai/tvarumo-festivalis/_DSC0255.jpg" :color-classes="['bg-[rgba(60,45,17,0.98)] dark:bg-zinc-900/90']">
      <template #title>Encouraging students to create their own initiatives</template>
      <p class="mb-4">An environment in which students can create their own initiatives and discover a community close to them has always been one of our most important topics. </p>
      <p> During this year, the ECSTRA project was completed. A system of support and promotion ... </p>
    </ElementWithBg>
    <ElementWithBg href="/en/darni-bendruomene/integracija" button-text="Read more" class="h-[36rem]" img-src="/img/renginiai/gimtadienis/Gabija_Matkutė_VUSA_(95).jpg" :color-classes="['bg-[rgba(38,25,17,0.95)] dark:bg-zinc-800/90']">
      <template #title>Foreign students – equal members of the community</template>
      <p class="mb-4">The importance of internationalization at the University is increasing. The number of foreign students is growing.</p>
      <p> In order to improve the experience of foreign students at Vilnius University, we took care of their integration both by... </p>
    </ElementWithBg>
    <ElementWithBg href="/en/darni-bendruomene/integracija" button-text="Read more" class="h-[36rem]" img-src="/img/renginiai/gimtadienis/Gabija_Matkutė_VUSA_(193).jpg" :color-classes="['bg-[rgba(24,39,17,0.95)] dark:bg-neutral-900/90']">
      <template #title>Green University </template>
      <p class="mb-4">In autumn, with the commitment of each VU SR member to contribute to the creation of the Green University and the integration of green principles not only within the framework of the Organization, but also throughout the University, we signed the Declaration of Sustainability. </p>
      <p>The VU SR Sustainability Declaration and our strategic agreement was approved by...</p>
    </ElementWithBg>
    <ElementWithBg href="/en/vu-sa/parlamentas#priimta-vu-sa-tvarumo-deklaracija" class="lg:col-span-2 lg:w-1/2 mx-auto h-[36rem]" img-src="/img/renginiai/pavasario-mokymai/IMG_7243.jpg" :color-classes="['bg-gradient-to-tr from-[rgba(48,39,17,0.95)] to-[rgba(60,12,6,0.95)] dark:bg-slate-900/90']" button-text="Read more">
      <template #title>Initiative "Higher education is not too high"</template>
      <p class="mb-4">The initiative brought together a network of 48 student ambassadors. The student ambassadors went to 22 regional schools where they met with the scholars and talked about the possibilities of higher education. </p>
      <p> Together with the Ministry of Education, Science and Sport of the Republic of Lithuania ... </p>
    </ElementWithBg>
  </div>
</section>
