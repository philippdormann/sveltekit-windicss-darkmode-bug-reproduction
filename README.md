# SvelteKit x Windi CSS darkmode bug reproduction 🐞

configuring Windi CSS with darkmode=media should use media query darkmode preference, actually uses class.

this leads to classes being purged

[open in stackblitz](https://stackblitz.com/github/philippdormann/sveltekit-windicss-darkmode-bug-reproduction)