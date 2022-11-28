import { useQuery } from '@tanstack/react-query';

export const Todos = () => {
  const { data, isLoading } = useQuery(['todos'], () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => json)
  );
  console.log(data);
  return <div>Todos</div>;
};
