# Thanks you for being with us

<script setup lang="ts">
import { teamPhotos, biuras, socakad, atstovai, kom, org, mark, hr, integration, admin, pkp, intl, lsp, other, dag } from '../../data/bendruomene'
import TeamAvatarLayout from '../../components/TeamAvatarLayout.vue'
import PhotoGrid from '../../components/PhotoGrid.vue'
</script>

![VU SA](../public/img/bendros-nuotraukos/VU-SA.jpg)

<PhotoGrid :photos="teamPhotos" />

## Central Office

<TeamAvatarLayout :members="biuras" />

## VU SR Board

![Taryba](../public/img/bendros-nuotraukos/Taryba.jpg)

More about the Parliament [read here](/en/vu-sa/taryba.md).

## Parlamentas

![Parlamentas](../public/img/bendros-nuotraukos/Parlamentas.jpg)

More about the Parliament [read here](/en/vu-sa/parlamentas.md).

## ISF

![ISF](../public/img/bendros-nuotraukos/ISF.jpg)

More about ISF [read here](/en/stipri-organizacija/isf.md).

## Data Security Group

<TeamAvatarLayout :members="dag" />

## Coordinators of Socioacademic Affairs

![Socakad](../public/img/bendros-nuotraukos/AASA.jpg)

<TeamAvatarLayout :members="socakad" />

## Representatives\' Coordinators

![Atstovų koordinatoriai](../public/img/bendros-nuotraukos/Atstovai.jpg)

<TeamAvatarLayout :members="atstovai" />

## Coordinators of Communication

![Komunikacijos koordinatoriai](../public/img/bendros-nuotraukos/Komunikacija.jpg)

<TeamAvatarLayout :members="kom" />

## Coordinators of Marketing

![Marketingo koordinatoriai](../public/img/bendros-nuotraukos/Marketingas.jpg)

<TeamAvatarLayout :members="mark" />

## Coordinators of Organizational Affairs

![Organizacinės srities koordinatoriai](../public/img/bendros-nuotraukos/Orgai.jpg)

<TeamAvatarLayout :members="org" />

## Coordinators of Human Resources

![HR](../public/img/bendros-nuotraukos/HR.jpg)

<TeamAvatarLayout :members="hr" />

## Coordinators of Integration Process

![Integracija](../public/img/bendros-nuotraukos/Integracija.jpg)

<TeamAvatarLayout :members="integration" />

## Administrators

![Administrators](../public/img/bendros-nuotraukos/LSP-koord.jpg)

<TeamAvatarLayout :members="admin" />

## Programs, Clubs and Projects

![PKP](../public/img/bendros-nuotraukos/PKP2.jpg)

<TeamAvatarLayout :members="pkp" />

## Coordinators of Foreign Student Affairs

![Tarptautinių studentų koordinatoriai](../public/img/bendros-nuotraukos/tarptautiniu.jpg)

<TeamAvatarLayout :members="intl" />

## Coordinators of LSIC

<TeamAvatarLayout :members="lsp" />

## IT and SMD coordinators

![IT](../public/img/bendros-nuotraukos/IT.jpg)

<TeamAvatarLayout :members="other" />
