interface Props {
  children: React.ReactNode;
}


export default function MainLayout({
  children
}: Props) {


return (

<div className="min-h-screen bg-gray-100">

{children}

</div>

);


}