interface genre {
  title: string;
}

export function Header(props: genre) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.title}</span></span>
    </header>
  );
}