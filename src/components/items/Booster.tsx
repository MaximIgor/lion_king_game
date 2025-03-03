import bumb from '@/assets/icons/items/bumb.png' // 4%
import health from '@/assets/icons/items/health.png' // 6%
import speedup from '@/assets/icons/items/fire.png' // 15%
import fullhealth from '@/assets/icons/items/fire.png' // 15%
import shield from '@/assets/icons/items/shield.png' // 15%
import slow from '@/assets/icons/items/slow.png' // 15%
import x2 from '@/assets/icons/items/x2.png' // 15%
import { useEffect, useState } from 'react'; // 15%

const items = [bumb, speedup, fullhealth, health, shield, slow, x2]

const Booster = () => {
    const [type, setType] = useState(0);
    useEffect(() => {
        const random_num = Math.random();
        if (random_num < 0.04) setType(0); // 4% for bumb
        else if (random_num < 0.10) setType(3); // 6% for health
        else if (random_num < 0.25) setType(1); // 15% for speedup
        else if (random_num < 0.40) setType(2); // 15% for fullhealth
        else if (random_num < 0.55) setType(4); // 15% for shield
        else if (random_num < 0.70) setType(5); // 15% for slow
        else setType(6); // 15% for x2
    }, [])
    return <div className='w-[40px] h-[40px]'>
        <img src={items[type]} alt="boost itme" className='w-full h-full object-cover' />
    </div>;
};

export default Booster;