# Ačiū, kad esate kartu

<script setup lang="ts">
import { teamPhotos, biuras, socakad, atstovai, kom, org, mark, hr, integration, admin, pkp, intl, lsp, other, dag } from '../data/bendruomene'
import TeamAvatarLayout from '../components/TeamAvatarLayout.vue'
import PhotoGrid from '../components/PhotoGrid.vue'
</script>

<!-- TODO: yra ką taisyti su žmonių kadencijų laikais -->

![VU SA](public/img/bendros-nuotraukos/VU-SA.jpg)

## Sritys

<PhotoGrid :photos="teamPhotos" />

## Centrinis biuras

<TeamAvatarLayout :members="biuras" />

## Taryba

![Taryba](public/img/bendros-nuotraukos/Taryba.jpg)

Daugiau apie Tarybą [skaitykite čia](/vu-sa/taryba.md).

## Parlamentas

![Parlamentas](public/img/bendros-nuotraukos/Parlamentas.jpg)

Daugiau apie Parlamentą [skaitykite čia](/vu-sa/parlamentas.md).

## ISF

![ISF](public/img/bendros-nuotraukos/ISF.jpg)

Daugiau apie ISF [skaitykite čia](/stipri-organizacija/isf.md).

## Duomenų apsaugos grupė

<TeamAvatarLayout :members="dag" />

## Socialinio-akademinio proceso reikalų koordinatoriai

![Socakad](public/img/bendros-nuotraukos/AASA.jpg)

<TeamAvatarLayout :members="socakad" />

## Atstovų koordinatoriai

![Atstovų koordinatoriai](public/img/bendros-nuotraukos/Atstovai.jpg)

<TeamAvatarLayout :members="atstovai" />

## Komunikacijos koordinatoriai

![Komunikacijos koordinatoriai](public/img/bendros-nuotraukos/Komunikacija.jpg)

<TeamAvatarLayout :members="kom" />

## Marketingo koordinatoriai

![Marketingo koordinatoriai](public/img/bendros-nuotraukos/Marketingas.jpg)

<TeamAvatarLayout :members="mark" />

## Organizacinės srities koordinatoriai

![Organizacinės srities koordinatoriai](public/img/bendros-nuotraukos/Orgai.jpg)

<TeamAvatarLayout :members="org" />

## Žmogiškųjų išteklių koordinatoriai

![HR](public/img/bendros-nuotraukos/HR.jpg)

<TeamAvatarLayout :members="hr" />

## Integracijos srities koordinatoriai

![Integracija](public/img/bendros-nuotraukos/Integracija.jpg)

<TeamAvatarLayout :members="integration" />

## Administratoriai

<TeamAvatarLayout :members="admin" />

## PKP

![PKP](public/img/bendros-nuotraukos/PKP2.jpg)

<TeamAvatarLayout :members="pkp" />

## Tarptautinių studentų koordinatoriai

![Tarptautinių studentų koordinatoriai](public/img/bendros-nuotraukos/tarptautiniu.jpg)

<TeamAvatarLayout :members="intl" />

## LSP

![LSP](public/img/bendros-nuotraukos/LSP-koord.jpg)

<TeamAvatarLayout :members="lsp" />

## IT bei SMD koordinatoriai

![IT](public/img/bendros-nuotraukos/IT.jpg)

<TeamAvatarLayout :members="other" />
