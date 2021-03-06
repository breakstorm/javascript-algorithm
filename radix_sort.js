/*
프로그램 명: radix_sort(open)
제한시간: 1 초
다른 정렬과는 달리 기수 정렬은 두 수의 비교에 의해서 정렬이 이루어지지 않습니다.

정렬 방법은 먼저 0 에서 9 까지의 바구니를 준비 한 후

일의 자리 수를 기준으로 해당 바구니에 수를 넣습니다.그리고 수를 그대로 모읍니다.
다시 십의 자리수를 기준으로 해당 바구니에 수를 넣습니다.마찬가지로 수를 그대로 모읍니다.
다시 백의 자리수를 기준으로 ...
예를 들어 보겠습니다.
다음과 같은 수가 있다고 하면 (최대 자리수가 100 자리)

16,29,38,235,42,7,6,129,8,88,77,12,875,10
먼저 일의 자리를 봅니다. 16 은 6 번째 바구니에 , 29 는 9 번 바구니에 , 38 은 8 번 바구니에 .... 결과는 이렇게 됩니다..

이 수를 차례대로 모읍니다.

10 , 42 , 12 , 235 , 875 , 16 , 6 , 7 , 77 , 38 , 8 , 88 , 29 , 129
다시 10 의 자리를 기준으로 차례대로 바구니에 넣습니다.

차례대로 모은 후

6 , 7 , 8 , 10 , 12 , 16 , 29 , 129 , 235 , 38 , 42 , 875 , 77 , 88
100 의 자리를 기준으로 바구니에 넣은 후 모으면 정렬 완료

문제는 최고자리수 -1 자리까지 한 후의 상태를 출력하는 것이다.
입력

입력의 첫 줄은 수의 갯수 n 이 주어진다. ( n <= 10000)
다음 줄에는 n 개의 자연수가 입력으로 주어진다. 각 수는 100000 이하
출력

최고 자리 - 1 자리 까지 처리한 후의 상태를 출력한다.
입출력 예

입력

14
10 42 12 235 875 16 6 7 77 38 8 88 29 129

출력

6 7 8 10 12 16 29 129 235 38 42 875 77 88 



자릿수별로 소팅 => 문자열로 관리
[0~9]기배열안에 배열을 만들기

*/