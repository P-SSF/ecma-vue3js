const ecmaInfo = {
  js2023: [
    {
      title: 'toSorted',
      content:
        '기존에 `javascript`에 있는 `sort()` 와 동작이 비슷함. 차이점은 기존의 `sort()` 는 원본 데이터가 변환되지만, `toSorted` 의 경우, **원본 데이터는 바뀌지 않고 반환되는 배열만 정렬됩니다.**',
      code: `

      // sort() 사용
      const arr = [1, 2, 3, 4, 5];
      const sorted = arr.sort((a, b) => b - a); // 내림차순으로 배열 요소를 정렬

      console.log(arr); // [5, 4, 3, 2, 1];
      console.log(sorted); // [5, 4, 3, 2, 1];

      // toSorted() 사용
      const arr = [1, 2, 3, 4, 5];
      const sorted = arr.toSorted((a, b) => b - a); // 내림차순으로 배열 요소를 정렬

      console.log(arr); // [1, 2, 3, 4, 5];
      console.log(sorted); // [5, 4, 3, 2, 1];
      `
    }
  ]
}

export default ecmaInfo
