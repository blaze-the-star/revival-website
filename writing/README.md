# Revival Project

1. [x] Wake-up (Day 1)
2. [x] Travel + Spirit (Day 2)
3. [x] Training/distraction (Day 3)
4. [x] Standing (Day 4)
5. [x] Protection + The dark fox (Day 4, 5)
6. [ ] Temple  (6)
7. [x] Snout and Soot (Day 7)
8. [x] Supper (Day 7)
9. [x] Dark's curiosity (Day 7)
10. [ ] ???
11. [ ] ???
12. [ ] ???
	- Set up what Eli or his group does that might cause Joseph's arrest (not the actual reason)
	- Joseph *decides* he does love his family, rejecting any thoughts that try to convince him otherwise
13. [ ] Ashes in the water 1 (Day X)
	- Soot's life outside of Joseph and her medicine shop
	- She drinks in a bar
	- She hears that Joseph might be in trouble and rushes to find him in Eli's camp
14. [ ] Ashes in the water 2 (Day X)
	- Soot is baptized
	- Soot urges Joseph to share the gospel with others
	- Joseph is afraid, but agrees reluctantly
15. [ ] Open air (Day X+1)
	- Joseph preaches to a crow, but they fight and berate him
	- Joseph is overwhelmed with the building emotions he's been bottling up since he woke up in this world
	- Joseph lashes out of desperation
	- Joseph runs away full of shame and regret
	- Soot blames herself
16. [ ] Aftermath (Day X+1)
	- Joseph cries
	- Then, Joseph demands to know how to go home from Eli, but Eli doesn't know how
	- Joseph, alone, comes across Crystal, who tells him about something interesting she's found in the archives: humans
	- Joseph, desperate for any way home, flirts with Crystal to persuade her to take him to the archives
17. [ ] The archives (Day X+1)
	- Joseph and Crystal sneak into the archives to read about humans
	- When they find the writings, Joseph finds no way home
	- Someone catches them sneaking around and Joseph is caught and taken to prison
18. [ ] Where is he (Day X+2, X+3)
	- Joseph has been missing for days
	- Soot and Eli's group grow increasingly concerned that they can't find Joseph
	- They begin blaming each other
19. [ ] Prison (Day X+2, X+3, X+4)
	- Joseph spends 3 full days in prison
	- He's calm, then he cries and breaks, then he prays praising God through tears
20. [ ] Joseph is released and stops running from responsibility
21. [ ] Resolutions

When Joseph is taken to prison there needs to be a logical reason to believe either camp is the reason Joseph is imprisoned or Soot. It's actually neither, but they should blame each other.

### TODO

- [ ] Rename _Shrine Walk_
- [ ] Come up with a term for the religious authorities

Back home, there were ones who found salvation and stopped there. They sought God no deeply than that. Don't be like them. You will never reach a point where you can't get closer. Never stop growing closer with God. Forever and ever. Let this be your character: that you seek God and never let anything get between you and Him, not even me. Let this be who you are. Amen.

### Add double spaces to end of every line
```find
^([^-].*\S)[ ]*

```
```replace
$1  

```
### Newline for every sentence
```find
^([^"“].*)\.\s*(\S)
```
```replace
$1.  
$2
```
### Quotes to curly-quotes
```find
["“]([^"“"]*)["”]
```
```replace
“$1”
```

