Marie, wir sollten einen extra Ordner haben, in dem wir die Artikel bearbeiten. Wenn sie zur Veröffentlichung fertig sind (und dafür z.B. Kommentare oder das folgende Critic-Markup vorher gelöscht werden) kopieren wir sie samt Bildern in /source/_articles und ersetzen dabei die alten Dateien.

<!-- @jakob dies ist eine Demo für Critic-Markup, eine Ergänzung von Markdown-Konventionen für kollaboratives redaktionelles Arbeiten an Text.

Marie, du findest ein Plugin für Sublime Code unter http://criticmarkup.com

Anleitung für die Auszeichnungen
http://criticmarkup.com/users-guide.php
-->

Demo: mit *Marked 2* oder *SublimeText-Plugin* oder *MultimarkdownComposer* auf dem Mac anschauen, oder auf dem iPad mit *Editorial* oder *Drafts* (und dort die Ansicht für CriticMarkup in Multimarkdown aktivieren)

Don't go around saying{-- to people that--} the world owes you a living. The world owes you nothing. It was here first. {~~One~>Only one~~} thing is impossible for God: To find {++any++} sense in any copyright law on the planet. {==Truth is stranger than fiction==}{>>strange but true<<}, but it is because Fiction is obliged to stick to possibilities; Truth isn’t.

# The Basic Syntax

There are five types of Critic marks:

```
Addition {++ ++}
Deletion {-- --}
Substitution {~~ ~> ~~}
Comment {>> <<}
Highlight {== ==}{>> <<}
```

We’ll go over each of these marks in turn.

## Additions

You make a CriticMarkup addition by surrounding the new text with curly braces and double plus marks.

```
Lorem ipsum dolor{++ sit++} amet…
```

Lorem ipsum dolor{++ sit++} amet…

A space character and “sit” will be inserted at the position shown.

## Deletions

Deletions use a similar syntax. The text to be deleted is surrounded with curly braces and double hyphens.

```
Lorem{-- ipsum--} dolor sit amet…
```

The word “ipsum” and a leading space character are marked for deletion in the above example.

## Substitutions

Substitutions combine a deletion with an addition in one snippet, and are written as matched curly braces and double tildes. A squiggly arrow made up of a tilde and greater-than symbol separates the old and new text. The characters to be deleted always occur to the left of the squiggly arrow.

```
Lorem {~~hipsum~>ipsum~~} dolor sit amet…
```

Despite the unique syntax, substitutions are really just a shorter way of writing a deletion followed by an addition.

## Comments

Critic Markup supports generic comments for metadata. A comment may include a note, time stamp, author initial or other annotation.

Comments are added via a set of curly braces and double greater-than/less-than symbols.

```
Lorem ipsum dolor sit amet.{>>This is a comment<<}
```


## Highlights

Highlights may be added as required by an editor or author, and the text to be outlined is marked by matched curly braces and double equal signs. Since a highlight on its own is fairly meaningless, it's always followed by a comment related to the highlighted passage.

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. {==Vestibulum at orci magna. Phasellus augue justo, sodales eu pulvinar ac, vulputate eget nulla.==}{>>confusing<<} Mauris massa sem, tempor sed cursus et, semper tincidunt lacus.
```


## Putting it all together

When used together the marks can handle fairly complex edits while still remaining readable in plain text.

```
Don't go around saying{-- to people that--} the world owes you a living. The world owes you nothing. It was here first. {~~One~>Only one~~} thing is impossible for God: To find {++any++} sense in any copyright law on the planet. {==Truth is stranger than fiction==}{>>strange but true<<}, but it is because Fiction is obliged to stick to possibilities; Truth isn’t.
```

## Attribution

CriticMarkup doesn't offer a separate tag for assigning attribution to individual edits at this time. Correct attribution is difficult in a multi-editor context, and we want to make sure we do it right.

If attribution is useful in your editing workflow, we suggest using the comment tag and prepending an authors name with an @ symbol. For example:

```
Don't act so surprised, Your {~~Queen~>Highness~~}{>>@jakob: sounds better<<}. You weren't on any mercy mission this time.
```

This will be the most compatible with future changes in CriticMarkup, since comments are unlikely to change in the future even if new tags are added.