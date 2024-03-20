# React Study를 위한 Repository
> *업무 상 React 활용이 필요해서 시작합니다.* <br>
> *Study는 Inflearn 동영상 강의로 진행했습니다.*

- 강의: [처음 만난 리액트(React)]([asffasf](https://www.inflearn.com/course/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8/))
- Study 일시: 2024.03.18 ~
- 기대: React에 대한 이해도 상승 (두근두근))

---

### Hooks
- useEffect
    - 기본적으로 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후와 업데이트로 인한 재렌더링 이후에 실행
    - 이펙트 함수는 컴포넌트 안에서 선언되기 때문에 해당 컴포넌트의 props와 state에 접근 가능
    - 하나의 컴포넌트에서 여러 개 사용 가능
    
    - useEffect(이펙트 함수, 의존성 배열);
        - 배열안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수 실행
    - useEffect(이펙트 함수, []);
        - 이펙트 함수가 mount, unmount시에 단 한 번만 실행(해당 이펙트가 props나 state에 있는 어떤 값에도 의존하지 않음)
    - useEffect(이펙트 함수);
        - 컴포넌트가 업데이트될 때마다 호출 (componentDidMount, componentDidUpdate와 비슷)
    - useEffect내 return하는 함수는 컴포넌트가 unmount가 될 때 호출됨 (componentWillUnmount와 동일)
  
    
    ```jsx
    useEffect(() => {
    	// 컴포넌트가 마운트 된 이후,
    	// 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    	// 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
    	// 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
    	...
    	
    	return () => {
    		// 컴포넌트가 마운트 해제되기 전에 실행됨
    		...
    	}	
    }, [의존성 변수1, 의존성 변수2, ...]);
    ```
    

- useMemo()
    - Memoization (Memoized Value)
    - 의존성 변수가 변했을 경우에 새로 호출
    - 컴포넌트가 다시 렌더링 될 때마다 연산량이 높은 작업을 피할 수 있음
    - useMemo Hook에 전달된 함수는 렌더링이 일어나는 동안 실행(성능 저하 가능성)
    - 의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행(아무 의미 없음)
    - 의존성 배열이 빈 배열일 경우, 컴포넌트 마운트 시에만 호출
    
    ```jsx
    const memoizedValue = useMemo(
    	() => {
    		// 연산량이 높은 작업을 수행하여 결과를 반환
    		return computeExpensiveValue(의존성 변수1, 의존성 변수2);
    	}, [의존성 변수1, 의존성 변수2]
    );
    
    ```
    
- useCallback()
- useRef()
    - ref 특정 컴포넌트에 접근할 수 있는 객체
    
- Hook의 규칙
    - 무조건 최상위 레벨에서만 호출해야 한다.