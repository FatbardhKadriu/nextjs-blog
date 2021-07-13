import Head from 'next/head'
import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{textAlign: "justify"}}>
           <span style={{fontWeight: "bolder"}}>FATBARDH KADRIU </span> received the B.S. degree in computer 
           engineering  from  the  Faculty  of  Electrical  and  
           Computer  Engineering (<a href="https://fiek.uni-pr.edu">FIEK</a>),  University  of Prishtina, 
           Kosovo,  in  2020.  He  also  has  been  a full exchange 
           student on the last semester at the Norwegian University 
           of Science and Technology (<a href="https://www.ntnu.edu/">NTNU</a>) in Gjøvik, Norway. 
           He is currently a master student in the same university 
           where he finished bachelor degree, and also working as a <i>Full Stack Developer</i>
           at <a href="https://www.inspire11.com/">Inspire11</a>. He is the author of one paper
           published in Electronics journal  and  has  
           served  as  a  reviewer  for  several papers in IEEE Access journal.</p>
        <p>
          (Source code available on {' '}
          <a href="https://github.com/fatbardhkadriu">Github</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}