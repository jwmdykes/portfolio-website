import Link from 'next/link';
import ExperienceCard from './ExperienceCard';

export default function Home() {
  return (
    <div className='relative bg-background-color min-h-screen flex flex-row justify-center px-20'>
      <div className='fixed rotate-45 -left-24 top-3/4 rounded-full w-1/3 h-72 bg-[#0e2d42a8] blur-[128px]'></div>
      <div className='fixed rotate-[312deg] left-1/3 top-96 rounded-full w-1/5 h-3/5 bg-[#1d42517c] blur-[512px]'></div>
      <div className='fixed top-1/4 -right-1/4 rounded-full w-2/5 h-1/3 bg-[#00475f] blur-[512px]'></div>
      <div className='container'>
        <div className='flex flex-row text-body-text-color justify-between gap-4'>
          {/* Fixed column */}
          <div className='flex flex-col justify-between gap-4 max-h-screen w-1/2 py-24 top-0 sticky'>
            <div className='absolute -top-10 -left-1/2 rounded-full w-full h-2/5 bg-[#002A48] blur-3xl -z-10'></div>

            <div className='flex flex-col space-y-2'>
              <h1>John Dykes</h1>
              <h2>Programmer and Mathematician</h2>
            </div>
            <div>
              <ul className='flex flex-col gap-4'>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
              </ul>
            </div>
            <div>
              <ul className='flex flex-row gap-5'>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
          {/* Scrollable column */}
          <div className='relative flex flex-col ml-auto w-1/2 py-24'>
            <section>
              <h3>About Me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit
                lectus, scelerisque eu tempus tristique, suscipit nec tellus.
                Aliquam ut <em>pulvinar ligula</em>. Sed rutrum urna in arcu
                lacinia, at ultrices quam pellentesque. Proin id rhoncus lectus.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis <em>egestas</em>. Mauris tincidunt
                lobortis varius. Etiam sed volutpat purus. Curabitur consectetur
                metus in lobortis consectetur. <em>Curabitur</em> ut nisi
                consectetur, <em>tempus</em> dui at, bibendum arcu.
              </p>
              <p>
                Ut nec ipsum ac quam volutpat vehicula nec ac felis. Mauris
                scelerisque orci sit amet nisi lobortis, quis tempor tellus{' '}
                <em>tempor</em>.
              </p>
            </section>
            <section>
              <h3>My Experience</h3>
              <div className='flex flex-col gap-20'>
                <ExperienceCard
                  skills={['Cryptography', 'Python', 'Mathematics', 'C/C++']}
                  company='Canadian Centre for Cyber Security'
                  date='2020 — Present'
                  title='Cryptanalyst'
                  description=<>
                    <p>
                      Researching and implementing cryptographic algorithms in
                      order to ensure cryptographic primitives used to protect
                      Government of Canada communications continue to be
                      effective in light of anticipated quantum computing
                      advancements
                    </p>
                  </>
                ></ExperienceCard>
                <ExperienceCard
                  skills={[
                    'Geocomputation',
                    'Python',
                    'Statistics',
                    'Machine Learning',
                  ]}
                  company='Communications Research Centre Canada'
                  date='2019 — 2020'
                  title='Computer Research Programmer'
                  description=<>
                    <p>
                      Worked on a team applying machine learning and
                      Geocomputation to telecommunications data, including
                      estimating the interference that cellular towers have on
                      each other
                    </p>
                  </>
                ></ExperienceCard>
              </div>
            </section>
            <section>
              <h3>Projects</h3>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
