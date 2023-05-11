<script setup lang="ts">
import { teamPhotos, biuras, socakad, atstovai, kom, org, mark, hr, integration, admin, pkp, intl, lsp, other } from '../data/bendruomene'
import TeamAvatarLayout from '../components/TeamAvatarLayout.vue'
</script>

# Ačiū, kad esate kartu

<!-- TODO: team grid -->

## Centrinis biuras

<TeamAvatarLayout :members="biuras" />
