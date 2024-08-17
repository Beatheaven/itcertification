interface myComponentProps {
  // children: React.ReactNode;
  url?: string;
  height?: string;
}

export default function BackgroundImage({ url, height }: myComponentProps) {
  return <div className={`bg-[url('${url}')]  bg-cover bg-center w-screen max-w-3xl h-[${height}]`}></div>;
}
