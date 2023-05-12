<script setup lang="ts">
import { teamPhotos, biuras, socakad, atstovai, kom, org, mark, hr, integration, admin, pkp, intl, lsp, other } from '../data/bendruomene'
import TeamAvatarLayout from '../components/TeamAvatarLayout.vue'
import PhotoGrid from '../components/PhotoGrid.vue'
</script>

# Ačiū, kad esate kartu

![VU SA](public/img/bendros-nuotraukos/VU-SA.jpg)

<PhotoGrid :photos="teamPhotos" />

## Centrinis biuras

<TeamAvatarLayout :members="biuras" />

## Taryba

## Parlamentas

## ISF

## Socialinio-akademinio proceso reikalų koordinatoriai

![Socakad](public/img/bendros-nuotraukos/AASA.jpg)

<TeamAvatarLayout :members="socakad" />

## Atstovų koordinatoriai

![Atstovų koordinatoriai](public/img/bendros-nuotraukos/Atstovai.jpg)

<TeamAvatarLayout :members="atstovai" />

## Komunikacijos koordinatoriai

<TeamAvatarLayout :members="kom" />

## Marketingo koordinatoriai

...

## Organizacinės srities koordinatoriai

...

## Žmogiškųjų išteklių koordinatoriai

...

## Integracijos srities koordinatoriai

...

## Administratoriai

<TeamAvatarLayout :members="admin" />
