export const algorithmsQuestions = [
  {
    id: 1,
    question: {
      en: "What does this print? (classic mutable default)",
      pl: "Co wypisze ten kod? (klasyczny mutable default)",
    },
    code: `def add(x, acc=[]):
    acc.append(x)
    return acc

print(add(1), add(2))`,
    options: {
      en: [
        "TypeError",
        "[1] [2]",
        "[1] [1, 2]",
        "[1, 2] [1, 2]",
      ],
      pl: [
        "TypeError",
        "[1] [2]",
        "[1] [1, 2]",
        "[1, 2] [1, 2]",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 2,
    question: {
      en: "Late binding in a loop. What is funcs[1]()?",
      pl: "Late binding w pętli. Ile wynosi funcs[1]()?",
    },
    code: `funcs = []
for i in range(3):
    funcs.append(lambda: i)
print(funcs[1]())`,
    options: {
      en: [
        "0",
        "2",
        "NameError",
        "1",
      ],
      pl: [
        "0",
        "2",
        "NameError",
        "1",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 3,
    question: {
      en: "Fix the late-binding bug. Correct fill?",
      pl: "Napraw late-binding. Poprawna luka?",
    },
    code: `funcs = []
for i in range(3):
    funcs.append(lambda i=i: i)
# now funcs[1]() == 1`,
    options: {
      en: [
        "lambda always evaluates immediately",
        "Default arg i=i captures value at definition time",
        "Python 3 forbids late binding entirely",
        "range objects are immutable so i is copied",
      ],
      pl: [
        "lambda zawsze ewaluuje się natychmiast",
        "Domyślny argument i=i przechwytuje wartość w momencie definicji",
        "Python 3 całkowicie zabrania late binding",
        "range jest niemutowalny, więc i jest kopiowane",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 4,
    question: {
      en: "What does this print?",
      pl: "Co wypisze ten kod?",
    },
    code: `a = [1, 2, 3]
b = a
b.append(4)
print(a)`,
    options: {
      en: [
        "Error",
        "[4]",
        "[1, 2, 3, 4]",
        "[1, 2, 3]",
      ],
      pl: [
        "Error",
        "[4]",
        "[1, 2, 3, 4]",
        "[1, 2, 3]",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 5,
    question: {
      en: "Shallow copy trap. What is matrix after this?",
      pl: "Pułapka shallow copy. Jaka jest matrix potem?",
    },
    code: `matrix = [[0] * 2] * 3
matrix[0][0] = 1
print(matrix)`,
    options: {
      en: [
        "[[1, 1], [1, 1], [1, 1]]",
        "[[1, 0], [1, 0], [1, 0]]",
        "[[1, 0], [0, 0], [0, 0]]",
        "TypeError",
      ],
      pl: [
        "[[1, 1], [1, 1], [1, 1]]",
        "[[1, 0], [1, 0], [1, 0]]",
        "[[1, 0], [0, 0], [0, 0]]",
        "TypeError",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 6,
    question: {
      en: "Safe way to make a 3×2 zero matrix?",
      pl: "Bezpieczny sposób na macierz 3×2 zer?",
    },
    code: `# choose the correct expression`,
    options: {
      en: [
        "[0] * 2 * 3",
        "[[0] * 3] * 2",
        "[[0] * 2 for _ in range(3)]",
        "[[0] * 2] * 3",
      ],
      pl: [
        "[0] * 2 * 3",
        "[[0] * 3] * 2",
        "[[0] * 2 for _ in range(3)]",
        "[[0] * 2] * 3",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 7,
    question: {
      en: "is vs == for small ints. What prints?",
      pl: "is vs == dla małych int. Co wypisze?",
    },
    code: `print(256 is 256)
print(257 is 257)  # may be False in some contexts
print(256 == 256)`,
    options: {
      en: [
        "is and == are always identical for ints",
        "Both lines with is always raise SyntaxError",
        "is compares values; == compares identity",
        "== compares values; is compares identity (interning may make is True for small ints)",
      ],
      pl: [
        "is i == są zawsze identyczne dla int",
        "Obie linie z is zawsze rzucają SyntaxError",
        "is porównuje wartości; == — tożsamość",
        "== porównuje wartości; is — tożsamość (interning może dać True dla małych int)",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 8,
    question: {
      en: "Truthiness. What does this print?",
      pl: "Truthiness. Co wypisze?",
    },
    code: `print(bool([]), bool(""), bool(0), bool([0]))`,
    options: {
      en: [
        "False True False True",
        "False False False True",
        "True True True True",
        "False False False False",
      ],
      pl: [
        "False True False True",
        "False False False True",
        "True True True True",
        "False False False False",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 9,
    question: {
      en: "or / and return values (not always bool). Output?",
      pl: "or / and zwracają wartości (nie zawsze bool). Output?",
    },
    code: `print("a" or "b")
print("" or "b")
print("a" and "b")
print("" and "b")`,
    options: {
      en: [
        "True / True / True / False",
        "a / a / a / b",
        "a / b / b / \"\"",
        "b / b / a / \"\"",
      ],
      pl: [
        "True / True / True / False",
        "a / a / a / b",
        "a / b / b / \"\"",
        "b / b / a / \"\"",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 10,
    question: {
      en: "Chained comparison. Is this True?",
      pl: "Porównanie łańcuchowe. Czy to True?",
    },
    code: `x = 5
print(1 < x < 10)
print(10 > x > 1)`,
    options: {
      en: [
        "False False — chaining is invalid",
        "SyntaxError",
        "True False",
        "True True — both mean (1 < x) and (x < 10) / (10 > x) and (x > 1)",
      ],
      pl: [
        "False False — łańcuchowanie jest niepoprawne",
        "SyntaxError",
        "True False",
        "True True — oba znaczą (1 < x) and (x < 10) / (10 > x) and (x > 1)",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 11,
    question: {
      en: "Integer division gotcha. Result of 7 // 2 and -7 // 2?",
      pl: "Pułapka dzielenia całkowitego. Wynik 7 // 2 oraz -7 // 2?",
    },
    code: `print(7 // 2)
print(-7 // 2)`,
    options: {
      en: [
        "3 and -3.5",
        "3 and -4 (floor division)",
        "3 and -3",
        "3.5 and -3.5",
      ],
      pl: [
        "3 i -3.5",
        "3 i -4 (dzielenie floor)",
        "3 i -3",
        "3.5 i -3.5",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 12,
    question: {
      en: "What is the time complexity of this?",
      pl: "Jaka jest złożoność czasowa?",
    },
    code: `def has_dup(nums):
    return len(nums) != len(set(nums))`,
    options: {
      en: [
        "O(n log n) guaranteed worst-case always",
        "O(1)",
        "O(n²)",
        "O(n) average",
      ],
      pl: [
        "O(n log n) zawsze w worst-case",
        "O(1)",
        "O(n²)",
        "O(n) średnio",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 13,
    question: {
      en: "Two Sum (hash map). Fill the blank.",
      pl: "Two Sum (hash mapa). Uzupełnij lukę.",
    },
    code: `def two_sum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = _____
    return []`,
    options: {
      en: [
        "target",
        "x",
        "i",
        "need",
      ],
      pl: [
        "target",
        "x",
        "i",
        "need",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 14,
    question: {
      en: "Valid parentheses. Which structure?",
      pl: "Valid parentheses. Jaka struktura?",
    },
    code: `def valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for ch in s:
        if ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
        else:
            stack.append(ch)
    return not stack`,
    options: {
      en: [
        "Queue (FIFO) only",
        "Union-Find",
        "Stack (LIFO) matching openers",
        "Binary heap",
      ],
      pl: [
        "Kolejka (FIFO) tylko",
        "Union-Find",
        "Stos (LIFO) dopasowujący otwarcia",
        "Kopiec binarny",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 15,
    question: {
      en: "Binary search bug. What’s wrong?",
      pl: "Bug w binary search. Co jest nie tak?",
    },
    code: `def bsearch(a, x):
    lo, hi = 0, len(a)  # hi exclusive?
    while lo < hi:
        mid = (lo + hi) // 2
        if a[mid] < x:
            lo = mid
        elif a[mid] > x:
            hi = mid
        else:
            return mid
    return -1`,
    options: {
      en: [
        "mid must use floating division",
        "Binary search cannot use while loops",
        "hi must always be len(a)-1 inclusive forever",
        "When a[mid] < x, lo = mid can infinite-loop; should be lo = mid + 1",
      ],
      pl: [
        "mid musi używać dzielenia zmiennoprzecinkowego",
        "Binary search nie może używać while",
        "hi musi zawsze być len(a)-1 inclusive",
        "Gdy a[mid] < x, lo = mid może zapętlić; powinno być lo = mid + 1",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 16,
    question: {
      en: "Reverse a string in Python idiomatically.",
      pl: "Odwróć string idiomatycznie w Pythonie.",
    },
    code: `s = "abcd"
# ???`,
    options: {
      en: [
        's[::-1]',
        "s.reverse()",
        "reversed(s)",
        "s.sort(reverse=True)",
      ],
      pl: [
        's[::-1]',
        "s.reverse()",
        "reversed(s)",
        "s.sort(reverse=True)",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 17,
    question: {
      en: "What does reversed(s) return for a string?",
      pl: "Co zwraca reversed(s) dla stringa?",
    },
    code: `s = "ab"
print(type(reversed(s)).__name__)
print("".join(reversed(s)))`,
    options: {
      en: [
        "A reverse iterator; join builds \"ba\"",
        "None",
        "A new string \"ba\" directly",
        "A list [\"b\", \"a\"]",
      ],
      pl: [
        "Iterator odwrotny; join buduje \"ba\"",
        "None",
        "Od razu nowy string \"ba\"",
        "Listę [\"b\", \"a\"]",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 18,
    question: {
      en: "Palindrome check. Fill blank.",
      pl: "Sprawdzenie palindromu. Uzupełnij lukę.",
    },
    code: `def is_pal(s):
    s = "".join(c.lower() for c in s if c.isalnum())
    return s == _____`,
    options: {
      en: [
        "s.swapcase()",
        "s[::-1]",
        "s.reverse()",
        "sorted(s)",
      ],
      pl: [
        "s.swapcase()",
        "s[::-1]",
        "s.reverse()",
        "sorted(s)",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 19,
    question: {
      en: "FizzBuzz fill. What’s correct for multiples of both?",
      pl: "FizzBuzz — luka. Co dla wielokrotności obu?",
    },
    code: `def fizzbuzz(n):
    for i in range(1, n + 1):
        if _____:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)`,
    options: {
      en: [
        "i % 5 == 0",
        "i % 15 == 0",
        "i % 3 == 0",
        "i % 3 == 0 or i % 5 == 0",
      ],
      pl: [
        "i % 5 == 0",
        "i % 15 == 0",
        "i % 3 == 0",
        "i % 3 == 0 or i % 5 == 0",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 20,
    question: {
      en: "Why check %15 (or both) BEFORE %3?",
      pl: "Dlaczego %15 (lub oba) PRZED %3?",
    },
    code: `# order of if/elif matters in FizzBuzz`,
    options: {
      en: [
        "It doesn’t matter at all",
        "Modulo 15 is faster than 3",
        "Python requires largest divisor first always",
        "Otherwise multiples of 15 would print only Fizz (or only Buzz)",
      ],
      pl: [
        "W ogóle nie ma znaczenia",
        "Modulo 15 jest szybsze niż 3",
        "Python wymaga zawsze największego dzielnika najpierw",
        "Inaczej wielokrotności 15 wypisałyby tylko Fizz (lub tylko Buzz)",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 21,
    question: {
      en: "Frequency map. Fill blank.",
      pl: "Mapa częstości. Uzupełnij lukę.",
    },
    code: `from collections import Counter

def most_common(nums):
    return Counter(nums).most_common(1)[0][_____]`,
    options: {
      en: [
        "0",
        "-1",
        "1",
        "2",
      ],
      pl: [
        "0",
        "-1",
        "1",
        "2",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 22,
    question: {
      en: "list.remove in a loop — what’s the surprise?",
      pl: "list.remove w pętli — co zaskoczy?",
    },
    code: `xs = [1, 2, 2, 3]
for x in xs:
    if x == 2:
        xs.remove(x)
print(xs)`,
    options: {
      en: [
        "[1, 3] — always removes all 2s safely",
        "[1, 2, 3] — iterating a list while mutating skips elements",
        "RuntimeError always",
        "[1, 2, 2, 3] — remove is ignored",
      ],
      pl: [
        "[1, 3] — zawsze bezpiecznie usuwa wszystkie 2",
        "[1, 2, 3] — iteracja z mutacją pomija elementy",
        "Zawsze RuntimeError",
        "[1, 2, 2, 3] — remove jest ignorowane",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 23,
    question: {
      en: "Safe pattern to filter while iterating?",
      pl: "Bezpieczny sposób filtrowania przy iteracji?",
    },
    code: `xs = [1, 2, 2, 3]
# keep non-2 values`,
    options: {
      en: [
        "xs.clear(2)",
        "for x in xs: xs.remove(2)",
        "del xs while iterating xs",
        "xs = [x for x in xs if x != 2]",
      ],
      pl: [
        "xs.clear(2)",
        "for x in xs: xs.remove(2)",
        "del xs podczas iteracji xs",
        "xs = [x for x in xs if x != 2]",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 24,
    question: {
      en: "Dict key error surprise. Output?",
      pl: "Niespodzianka z kluczem dict. Output?",
    },
    code: `d = {}
print(d.get("x", 0))
# d["x"]  -> KeyError`,
    options: {
      en: [
        "get raises; [] returns 0",
        "get returns default; [] raises KeyError if missing",
        "Both raise KeyError",
        "Both return None silently",
      ],
      pl: [
        "get rzuca; [] zwraca 0",
        "get zwraca default; [] rzuca KeyError przy braku",
        "Oba rzucają KeyError",
        "Oba po cichu zwracają None",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 25,
    question: {
      en: "Hashable keys. Which fails?",
      pl: "Hashable klucze. Co się wywali?",
    },
    code: `# which line errors?`,
    options: {
      en: [
        "d = {\"a\": 3}",
        "d = {[1, 2]: 3}",
        "d = {(1, 2): 3}",
        "d = {1: [2, 3]}",
      ],
      pl: [
        "d = {\"a\": 3}",
        "d = {[1, 2]: 3}",
        "d = {(1, 2): 3}",
        "d = {1: [2, 3]}",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 26,
    question: {
      en: "Tuple with a list inside. What happens?",
      pl: "Tuple z listą w środku. Co się stanie?",
    },
    code: `t = (1, [2, 3])
t[1].append(4)
print(t)`,
    options: {
      en: [
        "(1, 2, 3, 4)",
        "TypeError — tuples are fully frozen",
        "(1, [2, 3]) unchanged",
        "(1, [2, 3, 4]) — tuple is immutable but list content can change",
      ],
      pl: [
        "(1, 2, 3, 4)",
        "TypeError — tuple jest w pełni zamrożony",
        "(1, [2, 3]) bez zmian",
        "(1, [2, 3, 4]) — tuple jest niemutowalny, ale zawartość listy może się zmienić",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 27,
    question: {
      en: "enumerate fill.",
      pl: "enumerate — luka.",
    },
    code: `xs = ["a", "b"]
for i, x in enumerate(xs, start=1):
    print(i, x)
# first line prints:`,
    options: {
      en: [
        '1 a',
        "0 a",
        "a 1",
        "1 b",
      ],
      pl: [
        '1 a',
        "0 a",
        "a 1",
        "1 b",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 28,
    question: {
      en: "zip stops early. Output?",
      pl: "zip kończy wcześnie. Output?",
    },
    code: `print(list(zip([1, 2, 3], ["a", "b"])))`,
    options: {
      en: [
        "[(1, 'a'), (2, 'b')]",
        "[(1, 'a'), (2, 'b'), (3, None)]",
        "[(1, 'a'), (2, 'b'), (3, 'b')]",
        "ValueError",
      ],
      pl: [
        "[(1, 'a'), (2, 'b')]",
        "[(1, 'a'), (2, 'b'), (3, None)]",
        "[(1, 'a'), (2, 'b'), (3, 'b')]",
        "ValueError",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 29,
    question: {
      en: "Sliding window max-sum of size k. Fill.",
      pl: "Sliding window — max suma okna k. Luka.",
    },
    code: `def max_sum(nums, k):
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        best = max(best, window)
    return best`,
    options: {
      en: [
        "O(1) only",
        "O(n·k) nested loops required",
        "O(n²) always",
        "O(n) — add right, remove left",
      ],
      pl: [
        "Tylko O(1)",
        "Wymagane O(n·k) zagnieżdżone pętle",
        "Zawsze O(n²)",
        "O(n) — dodaj prawy, odejmij lewy",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 30,
    question: {
      en: "Two pointers for sorted two-sum. Move which pointer?",
      pl: "Two pointers dla posortowanego two-sum. Który pointer ruszyć?",
    },
    code: `def two_sum_sorted(a, target):
    lo, hi = 0, len(a) - 1
    while lo < hi:
        s = a[lo] + a[hi]
        if s == target:
            return lo, hi
        if s < target:
            _____
        else:
            hi -= 1
    return None`,
    options: {
      en: [
        "hi += 1",
        "lo += 1",
        "lo -= 1",
        "hi = lo",
      ],
      pl: [
        "hi += 1",
        "lo += 1",
        "lo -= 1",
        "hi = lo",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 31,
    question: {
      en: "Recursion depth surprise. What can happen?",
      pl: "Głębokość rekursji — niespodzianka. Co może się stać?",
    },
    code: `import sys
sys.setrecursionlimit(1000)

def f(n):
    return 1 if n == 0 else f(n - 1)`,
    options: {
      en: [
        "Stack grows but never fails",
        "Python optimizes all tail calls so never errors",
        "Always returns 0",
        "Large n → RecursionError; prefer iterative for deep recursion",
      ],
      pl: [
        "Stos rośnie, ale nigdy nie pada",
        "Python optymalizuje wszystkie tail calle, więc nigdy nie erroruje",
        "Zawsze zwraca 0",
        "Duże n → RecursionError; przy głębokiej rekursji lepiej iteracyjnie",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 32,
    question: {
      en: "Fibonacci naive complexity?",
      pl: "Złożoność naiwnego Fibonacciego?",
    },
    code: `def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)`,
    options: {
      en: [
        "O(φⁿ) exponential",
        "O(log n)",
        "O(n)",
        "O(1)",
      ],
      pl: [
        "O(φⁿ) wykładnicza",
        "O(log n)",
        "O(n)",
        "O(1)",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 33,
    question: {
      en: "Memoized fib. Fill decorator blank idea.",
      pl: "Fib z memo. Idea dekoratora — luka.",
    },
    code: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)`,
    options: {
      en: [
        "Only works for n < 2",
        "Makes it O(1) memory always",
        "Caches results → effectively O(n) time",
        "Removes recursion entirely",
      ],
      pl: [
        "Działa tylko dla n < 2",
        "Zawsze daje O(1) pamięci",
        "Cache’uje wyniki → efektywnie O(n) czasu",
        "Całkowicie usuwa rekursję",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 34,
    question: {
      en: "sort vs sorted. What’s true?",
      pl: "sort vs sorted. Co jest prawdą?",
    },
    code: `a = [3, 1, 2]
b = sorted(a)
a.sort()`,
    options: {
      en: [
        "Both return new lists",
        "sort returns the sorted list",
        "sorted returns new list; sort mutates in place and returns None",
        "Both mutate in place",
      ],
      pl: [
        "Oba zwracają nowe listy",
        "sort zwraca posortowaną listę",
        "sorted zwraca nową listę; sort mutuje in-place i zwraca None",
        "Oba mutują in-place",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 35,
    question: {
      en: "Sorting with key. Output?",
      pl: "Sortowanie z key. Output?",
    },
    code: `words = ["bb", "a", "ccc"]
print(sorted(words, key=len))`,
    options: {
      en: [
        '["ccc", "bb", "a"]',
        '["bb", "a", "ccc"]',
        '["a", "bb", "ccc"]',
        "TypeError",
      ],
      pl: [
        '["ccc", "bb", "a"]',
        '["bb", "a", "ccc"]',
        '["a", "bb", "ccc"]',
        "TypeError",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 36,
    question: {
      en: "Stable sort surprise. Relative order of equal keys?",
      pl: "Stabilny sort — niespodzianka. Kolejność równych kluczy?",
    },
    code: `xs = [("b", 2), ("a", 2), ("c", 1)]
print(sorted(xs, key=lambda t: t[1]))`,
    options: {
      en: [
        "[('c', 1), ('a', 2), ('b', 2)] — always alphabetical",
        "Undefined / random each run",
        "[('c', 1), ('b', 2), ('a', 2)] — stable: b before a preserved",
        "[('b', 2), ('a', 2), ('c', 1)]",
      ],
      pl: [
        "[('c', 1), ('a', 2), ('b', 2)] — zawsze alfabetycznie",
        "Niezdefiniowane / losowe przy każdym uruchomieniu",
        "[('c', 1), ('b', 2), ('a', 2)] — stabilny: b przed a zachowane",
        "[('b', 2), ('a', 2), ('c', 1)]",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 37,
    question: {
      en: "Generator vs list. What prints?",
      pl: "Generator vs lista. Co wypisze?",
    },
    code: `g = (x * x for x in range(3))
print(list(g))
print(list(g))`,
    options: {
      en: [
        "[0, 1, 4] then [] — generators exhaust",
        "Error on second list()",
        "[0, 1, 4] then [0, 1, 4]",
        "None None",
      ],
      pl: [
        "[0, 1, 4] potem [] — generatory się wyczerpują",
        "Błąd przy drugim list()",
        "[0, 1, 4] potem [0, 1, 4]",
        "None None",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 38,
    question: {
      en: "Membership complexity intuition.",
      pl: "Intuicja złożoności membership.",
    },
    code: `x in [1, 2, 3]   # list
x in {1, 2, 3}   # set`,
    options: {
      en: [
        "Both O(n²)",
        "Both O(1)",
        "set always slower than list",
        "list ~ O(n), set ~ O(1) average",
      ],
      pl: [
        "Oba O(n²)",
        "Oba O(1)",
        "set zawsze wolniejszy od listy",
        "lista ~ O(n), set ~ O(1) średnio",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 39,
    question: {
      en: "Off-by-one in range. What prints?",
      pl: "Off-by-one w range. Co wypisze?",
    },
    code: `print(list(range(1, 4)))
print(list(range(4, 1, -1)))`,
    options: {
      en: [
        "[1, 2, 3] and [4, 3, 2]",
        "[1, 2, 3, 4] and [4, 3, 2, 1]",
        "[1, 2, 3] and [4, 3, 2, 1]",
        "[0, 1, 2, 3] and []",
      ],
      pl: [
        "[1, 2, 3] oraz [4, 3, 2]",
        "[1, 2, 3, 4] oraz [4, 3, 2, 1]",
        "[1, 2, 3] oraz [4, 3, 2, 1]",
        "[0, 1, 2, 3] oraz []",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 40,
    question: {
      en: "finally always runs? Output?",
      pl: "finally zawsze się wykona? Output?",
    },
    code: `def f():
    try:
        return 1
    finally:
        print("bye")

print(f())`,
    options: {
      en: [
        'bye then 1',
        "only 1",
        "only bye",
        "1 then bye",
      ],
      pl: [
        'bye potem 1',
        "tylko 1",
        "tylko bye",
        "1 potem bye",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 41,
    question: {
      en: "None comparison pitfall.",
      pl: "Pułapka porównań z None.",
    },
    code: `# preferred check`,
    options: {
      en: [
        "if x is None:",
        "if x === None:",
        "if x == None:",
        "if x = None:",
      ],
      pl: [
        "if x is None:",
        "if x === None:",
        "if x == None:",
        "if x = None:",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 42,
    question: {
      en: "+= on list vs int rebinding intuition.",
      pl: "+= na liście vs rebind int — intuicja.",
    },
    code: `a = [1]
b = a
b += [2]
print(a)

x = 1
y = x
y += 1
print(x)`,
    options: {
      en: [
        "[1] and 1",
        "[1, 2] and 2",
        "[1, 2] and 1 — list += mutates; int += rebinds name",
        "[1] and 2",
      ],
      pl: [
        "[1] oraz 1",
        "[1, 2] oraz 2",
        "[1, 2] oraz 1 — list += mutuje; int += przepina nazwę",
        "[1] oraz 2",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 43,
    question: {
      en: "Flatten one level. Fill.",
      pl: "Spłaszcz o jeden poziom. Luka.",
    },
    code: `nested = [[1, 2], [3], [4, 5]]
flat = [x for group in nested for x in _____]`,
    options: {
      en: [
        "range(len(group))",
        "flat",
        "group",
        "nested",
      ],
      pl: [
        "range(len(group))",
        "flat",
        "group",
        "nested",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 44,
    question: {
      en: "Swap without temp. Correct?",
      pl: "Swap bez zmiennej tymczasowej. Poprawne?",
    },
    code: `a, b = 1, 2
a, b = b, a
print(a, b)`,
    options: {
      en: [
        "1 1",
        "SyntaxError",
        "2 1",
        "1 2",
      ],
      pl: [
        "1 1",
        "SyntaxError",
        "2 1",
        "1 2",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 45,
    question: {
      en: "deque for queue — why not list.pop(0)?",
      pl: "deque jako kolejka — czemu nie list.pop(0)?",
    },
    code: `from collections import deque
q = deque()
q.append(1)
q.popleft()`,
    options: {
      en: [
        "list.pop(0) is O(n); deque.popleft is O(1)",
        "deque cannot pop left",
        "They are identical big-O",
        "list.pop(0) is O(1); deque is slower",
      ],
      pl: [
        "list.pop(0) to O(n); deque.popleft to O(1)",
        "deque nie umie pop left",
        "Mają identyczne big-O",
        "list.pop(0) to O(1); deque jest wolniejszy",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 46,
    question: {
      en: "String immutability. What happens?",
      pl: "Niemutowalność stringów. Co się stanie?",
    },
    code: `s = "cat"
# s[0] = "b"`,
    options: {
      en: [
        "s becomes \"b\"",
        "s becomes \"bat\"",
        "Silently ignored",
        "TypeError — strings cannot be item-assigned",
      ],
      pl: [
        "s staje się \"b\"",
        "s staje się \"bat\"",
        "Po cichu ignorowane",
        "TypeError — stringom nie da się przypisać po indeksie",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 47,
    question: {
      en: "Max subarray (Kadane). Fill blank.",
      pl: "Max subarray (Kadane). Uzupełnij lukę.",
    },
    code: `def max_subarray(nums):
    best = cur = nums[0]
    for x in nums[1:]:
        cur = max(x, cur + x)
        best = max(best, _____)
    return best`,
    options: {
      en: [
        "cur",
        "x",
        "0",
        "nums[0]",
      ],
      pl: [
        "cur",
        "x",
        "0",
        "nums[0]",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 48,
    question: {
      en: "Anagram check. Best fill?",
      pl: "Sprawdzenie anagramu. Najlepsza luka?",
    },
    code: `from collections import Counter

def anagram(a, b):
    return Counter(a) == _____`,
    options: {
      en: [
        "list(b)",
        "Counter(b)",
        "sorted(b)",
        "set(b)",
      ],
      pl: [
        "list(b)",
        "Counter(b)",
        "sorted(b)",
        "set(b)",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 49,
    question: {
      en: "What does * unpacking do here?",
      pl: "Co robi * unpacking tutaj?",
    },
    code: `a, *mid, b = [1, 2, 3, 4, 5]
print(a, mid, b)`,
    options: {
      en: [
        "1 [2, 3, 4] 5",
        "1 2 [3, 4, 5]",
        "[1, 2, 3, 4] 5",
        "SyntaxError",
      ],
      pl: [
        "1 [2, 3, 4] 5",
        "1 2 [3, 4, 5]",
        "[1, 2, 3, 4] 5",
        "SyntaxError",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 50,
    question: {
      en: "Global vs local gotcha. What happens?",
      pl: "Global vs local — pułapka. Co się stanie?",
    },
    code: `x = 1

def bump():
    x = x + 1
    return x

bump()`,
    options: {
      en: [
        "UnboundLocalError — x assigned in function so treated local before use",
        "Returns 1",
        "Returns 2",
        "SyntaxError",
      ],
      pl: [
        "UnboundLocalError — przypisanie do x czyni je lokalnym przed użyciem",
        "Zwraca 1",
        "Zwraca 2",
        "SyntaxError",
      ],
    },
    correctIndex: 0,
  },
];
