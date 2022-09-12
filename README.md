# fast-glob-3.2.12-bug-repro

The behavior in index.js changes between fast-glob@3.2.11 and fast-glob@3.2.12.


## 3.2.11
```console
$ node index.js
[ '/Users/landon.turner/test/fast-glob-repro/test-data/test-file.txt' ]
```

## 3.2.12
```console
$ node index.js
[]
```
