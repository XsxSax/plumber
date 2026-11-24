// plumber: a 120-word cold email pitching bookkeeping to a busy plumber.
// The program writes it to /output/entry.txt. Node 22, standard library only.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const email = `Subject: Your books, done by Friday

Hi Tom,

You start at 6, you're on call-outs all day, and the invoices pile up until 10pm. I do the books for two-van firms like yours, so you stop doing paperwork at night.

Here's what I take off your plate. I chase every invoice, match every receipt, and send you one number each Friday: what you earned, what you owe, what's overdue. No software to learn. You just forward photos of your receipts.

First month is £49, and the first week is free so you can see if it fits. If it doesn't, you walk away and keep the tidy books.

Want me to start this Friday? Reply "yes" and I'll send one short form.

Best,
Sarah
ClearBooks`;
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), email);
