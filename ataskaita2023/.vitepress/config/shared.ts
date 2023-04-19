export const sharedConfig = {
    socialLinks: [
        { icon: 'facebook', link: 'https://www.facebook.com/VUstudentuatstovybe' },
        { icon: 'instagram', link: 'https://www.instagram.com/vustudentuatstovybe/' },
    ],

      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: 'Ieškoti',
                  buttonAriaLabel: 'Ieškoti',
                },
                modal: {
                  noResultsText: 'Nerasta',
                  resetButtonTitle: 'Išvalyti',
                  footer: {
                    selectText: 'Pasirinkti',
                    navigateText: 'Naviguoti',
                    closeText: 'Uždaryti',
                  }
                }
              }
            }
          }
        }
      }
    }
