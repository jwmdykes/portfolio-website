import BackgroundOvals from './BackgroundOvals';
import MobileOvals from './MobileOvals';
import PageContent from "@/app/PageContent";
import Container from "@/app/Components/Container"


export default function Home() {
    return (
        <div className='relative bg-background-color min-h-screen flex flex-row justify-center p-4 md:py-0 md:px-20'>
            <BackgroundOvals></BackgroundOvals>
            <MobileOvals></MobileOvals>

            <Container>
                <PageContent></PageContent>
            </Container>
        </div>
    );
}
