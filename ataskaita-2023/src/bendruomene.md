<script setup lang="ts">
import { teamPhotos, biuras, socakad, atstovai, kom, org, mark, hr, integration, admin, pkp, intl, lsp, other } from '../data/bendruomene'
import TeamAvatarLayout from '../components/TeamAvatarLayout.vue'
import PhotoGrid from '../components/PhotoGrid.vue'
</script>

# Ačiū, kad esate kartu

![VU SA](/ataskaita-2023/img/bendros-nuotraukos/VU-SA.jpg){.rounded-sm}

<PhotoGrid :photos="teamPhotos" />

## Centrinis biuras

<TeamAvatarLayout :members="biuras" />

## Socialinio-akademinio proceso reikalų koordinatoriai

![Socakad](/ataskaita-2023/img/bendros-nuotraukos/AASA.jpg){.rounded-sm}

<TeamAvatarLayout :members="socakad" />
