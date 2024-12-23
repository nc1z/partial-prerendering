export async function SlowComponent(props: { delay: number }) {
  await new Promise((resolve) => setTimeout(resolve, props.delay));
  return <div>Component blocked for {props.delay}ms</div>;
}
