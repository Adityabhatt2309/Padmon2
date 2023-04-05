import React from 'react'
import { useRouter } from 'next/router';
import StonePaper1 from '@/components/NftStack/StonePaper1';

const Data = () => {
    const router = useRouter();
    const slug = router.query.slug;
  return (
    <div>
      {/* <StonePaper1 index={slug}/> */}
      <StonePaper1 index={slug}/>
    </div>
  )
}

export default Data
