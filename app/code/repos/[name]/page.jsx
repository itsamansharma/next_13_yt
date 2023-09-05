import Repo from '@/app/components/repo'
import RepoDirs from '@/app/components/repoDirs'
import Link from 'next/link'

const RepoPage = ({params: {name}}) => {
  return (
    <div className="card">
        <Link href='/code/repos' className='btn btn-sm btn-primary'>back to repositories</Link>
       <Repo name={name}/>
       <RepoDirs name={name}/>
    </div>
  )
}

export default RepoPage