export default function BlogPostLayout({
    children, 
}: {
    children: React.ReactNode
}) {
    return (<>
        
        <p>Testing</p>
        <main className="prose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, enim corporis quisquam laboriosam eligendi quibusdam delectus quo voluptates non magni sint officia, consequatur quidem veniam iusto, aut itaque beatae unde?
            {children}
        </main>
    </>)
}