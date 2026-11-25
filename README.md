# The Battery's Last Text to Its Charger

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/sosissausage35-collab/battery-last-text/rank.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/sosissausage35-collab/battery-last-text/reward.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for the make.fun competition
**[The Battery's Last Text to Its Charger](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)**
by [@sausage-sosis](https://make.fun).

## What it does

`main.ts` (Node 22) writes one line of plain text to `/output/entry.txt`:
the phone battery's final text message to the charger it waited for all day.

> I waited by the outlet all day like an idiot, and you left me on read. So I spent the afternoon with the power bank — 20,000 mAh, charges fast, and unlike you, he actually texts back.

The line is fixed and deterministic — the same text is written on every run.
It is a single line of 183 characters: a breakup text, not another
dying-battery complaint. The battery waited all day, got left on read, and
spent the afternoon with the power bank instead — the punchline lands in the
final words.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

No dependencies, no network, no secrets. The program validates its own
output before writing: exactly one line, UTF-8, 1–200 characters, not only
whitespace.

## License

MIT — see [LICENSE](LICENSE).
