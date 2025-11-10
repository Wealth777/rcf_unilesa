import React, { useState } from 'react';
import '../styles/Sermons.css';
import sermon1 from '../assets/20250219_203324.png';
import sermon2 from '../assets/20250219_203324.png';
import sermon3 from '../assets/20250219_203324.png';

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedSermon, setSelectedSermon] = useState(null);

  const sermons = [
    {
      id: 1,
      image: sermon1,
      topic: 'Renewed Mind',
      bibleRef: 'Romans 12:2',
      preacher: 'Pastor John Doe',
      date: '2025-10-28',
      content: `A renewed mind is one that aligns with the will of God.
      When we allow the Holy Spirit to transform our thoughts,
      we begin to see and live differently. This message explores
      how we can daily renew our minds through the Word and prayer. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa eos eum maiores, pariatur molestias ipsum eaque illum! Deleniti obcaecati ratione incidunt magni exercitationem accusantium. Error vel corporis animi reprehenderit!
            Labore blanditiis aperiam architecto! Natus placeat porro dolorem quos aperiam possimus. Cupiditate beatae aliquid delectus culpa sed! Eos vel incidunt aliquid amet, natus id dignissimos maiores, quam ab inventore ipsam!
            Sunt, eligendi amet iusto accusantium voluptas aspernatur reprehenderit itaque? Aut porro voluptatum voluptas sed perspiciatis, accusantium repellat quidem error, repudiandae expedita ab sit debitis corrupti nihil aliquid voluptate soluta similique.<br><br>
            Numquam commodi rem laboriosam quia quo voluptates iure magnam quos, mollitia, neque rerum officia nostrum illo aliquam. Eligendi, magnam excepturi veritatis exercitationem odio dolorem libero ut voluptatum minima distinctio tempora.
            Earum dolorum necessitatibus facilis architecto dolores unde quas, obcaecati ut animi officia reiciendis dolore quo quidem? Velit laudantium natus aspernatur! Doloremque id ut, quas debitis iste quod non eius itaque.
            Culpa inventore qui, corporis optio, a praesentium, id maxime numquam perferendis dolorem unde asperiores eaque est saepe velit fuga tenetur molestiae. Animi sapiente voluptas asperiores ipsum, eaque modi fugiat delectus!
            Sequi quaerat nostrum tenetur deleniti maiores mollitia vel recusandae doloribus tempore, magnam earum. Iure tempora, in omnis labore sunt aliquid doloremque iste vel fugit. Reprehenderit corrupti est rerum illo maxime?
            Eum, aliquid excepturi numquam cum eos veniam id nisi suscipit, dolorum reiciendis tempore repudiandae illo? Modi officiis praesentium, ducimus veniam velit architecto explicabo sunt odio dolorem ad in ipsam sint.
            Architecto quis, molestiae odio temporibus dicta nesciunt deserunt voluptates quod ipsam at esse reprehenderit inventore? Aperiam, maiores sequi neque architecto rem iure voluptatum molestiae consequuntur itaque vero labore tenetur ducimus?<br><br>
            Vero labore, facilis quis quos, dolore omnis pariatur cupiditate ducimus architecto sequi qui debitis itaque? Doloribus similique dolores praesentium. Maxime suscipit est, sint harum quas velit sed minus et nulla.
            Possimus nulla iusto, deserunt voluptate laborum fugiat mollitia amet magnam aut nam expedita aliquam corrupti repudiandae beatae fugit totam nobis vitae? Ratione sequi doloribus, blanditiis doloremque eius voluptatibus quia quod?
            Magni ducimus ullam reprehenderit laboriosam officia nam sequi. Sapiente, facilis odio tempore sequi ducimus iure at autem quam ad laborum veniam illum magni aliquam placeat, aspernatur commodi repellendus dolore laboriosam.
            Maiores atque vitae maxime fugit quidem cumque ipsum sed ipsa doloremque ratione. Beatae recusandae quaerat quisquam sint cum ipsam vero sequi nemo! Magni amet explicabo quia sunt? Ratione, officia! Magni!
            Perspiciatis, suscipit repellat. Dicta, nam molestiae. Laborum, ducimus. Voluptas omnis alias perspiciatis cumque quasi soluta sequi optio ducimus nihil necessitatibus, beatae eligendi expedita, sit incidunt tempora consequuntur, enim earum non.<br><br>
            Quidem velit voluptate sequi, doloribus nihil ratione corrupti natus, mollitia voluptatum eius maiores illo placeat? Porro, quasi doloremque natus tempore velit soluta cupiditate vero sit explicabo sint ullam libero ad!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa eos eum maiores, pariatur molestias ipsum eaque illum! Deleniti obcaecati ratione incidunt magni exercitationem accusantium. Error vel corporis animi reprehenderit!
            Labore blanditiis aperiam architecto! Natus placeat porro dolorem quos aperiam possimus. Cupiditate beatae aliquid delectus culpa sed! Eos vel incidunt aliquid amet, natus id dignissimos maiores, quam ab inventore ipsam!
            Sunt, eligendi amet iusto accusantium voluptas aspernatur reprehenderit itaque? Aut porro voluptatum voluptas sed perspiciatis, accusantium repellat quidem error, repudiandae expedita ab sit debitis corrupti nihil aliquid voluptate soluta similique.
            Numquam commodi rem laboriosam quia quo voluptates iure magnam quos, mollitia, neque rerum officia nostrum illo aliquam. Eligendi, magnam excepturi veritatis exercitationem odio dolorem libero ut voluptatum minima distinctio tempora.
            Earum dolorum necessitatibus facilis architecto dolores unde quas, obcaecati ut animi officia reiciendis dolore quo quidem? Velit laudantium natus aspernatur! Doloremque id ut, quas debitis iste quod non eius itaque.
            Culpa inventore qui, corporis optio, a praesentium, id maxime numquam perferendis dolorem unde asperiores eaque est saepe velit fuga tenetur molestiae. Animi sapiente voluptas asperiores ipsum, eaque modi fugiat delectus!
            Sequi quaerat nostrum tenetur deleniti maiores mollitia vel recusandae doloribus tempore, magnam earum. Iure tempora, in omnis labore sunt aliquid doloremque iste vel fugit. Reprehenderit corrupti est rerum illo maxime?
            Eum, aliquid excepturi numquam cum eos veniam id nisi suscipit, dolorum reiciendis tempore repudiandae illo? Modi officiis praesentium, ducimus veniam velit architecto explicabo sunt odio dolorem ad in ipsam sint.
            Architecto quis, molestiae odio temporibus dicta nesciunt deserunt voluptates quod ipsam at esse reprehenderit inventore? Aperiam, maiores sequi neque architecto rem iure voluptatum molestiae consequuntur itaque vero labore tenetur ducimus?<br><br>
            Vero labore, facilis quis quos, dolore omnis pariatur cupiditate ducimus architecto sequi qui debitis itaque? Doloribus similique dolores praesentium. Maxime suscipit est, sint harum quas velit sed minus et nulla.
            Possimus nulla iusto, deserunt voluptate laborum fugiat mollitia amet magnam aut nam expedita aliquam corrupti repudiandae beatae fugit totam nobis vitae? Ratione sequi doloribus, blanditiis doloremque eius voluptatibus quia quod?
            Magni ducimus ullam reprehenderit laboriosam officia nam sequi. Sapiente, facilis odio tempore sequi ducimus iure at autem quam ad laborum veniam illum magni aliquam placeat, aspernatur commodi repellendus dolore laboriosam.
            Maiores atque vitae maxime fugit quidem cumque ipsum sed ipsa doloremque ratione. Beatae recusandae quaerat quisquam sint cum ipsam vero sequi nemo! Magni amet explicabo quia sunt? Ratione, officia! Magni!
            Perspiciatis, suscipit repellat. Dicta, nam molestiae. Laborum, ducimus. Voluptas omnis alias perspiciatis cumque quasi soluta sequi optio ducimus nihil necessitatibus, beatae eligendi expedita, sit incidunt tempora consequuntur, enim earum non.
            Quidem velit voluptate sequi, doloribus nihil ratione corrupti natus, mollitia voluptatum eius maiores illo placeat? Porro, quasi doloremque natus tempore velit soluta cupiditate vero sit explicabo sint ullam libero ad!`,
    },
    {
      id: 2,
      image: sermon2,
      topic: 'Faith Over Fear',
      bibleRef: '2 Timothy 1:7',
      preacher: 'Pastor Jane Smith',
      date: '2025-09-20',
      content: `Faith is a weapon that defeats fear.
      Learn how to overcome fear and walk boldly in the promises of God. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa eos eum maiores, pariatur molestias ipsum eaque illum! Deleniti obcaecati ratione incidunt magni exercitationem accusantium. Error vel corporis animi reprehenderit!
            Labore blanditiis aperiam architecto! Natus placeat porro dolorem quos aperiam possimus. Cupiditate beatae aliquid delectus culpa sed! Eos vel incidunt aliquid amet, natus id dignissimos maiores, quam ab inventore ipsam!
            Sunt, eligendi amet iusto accusantium voluptas aspernatur reprehenderit itaque? Aut porro voluptatum voluptas sed perspiciatis, accusantium repellat quidem error, repudiandae expedita ab sit debitis corrupti nihil aliquid voluptate soluta similique.
            Numquam commodi rem laboriosam quia quo voluptates iure magnam quos, mollitia, neque rerum officia nostrum illo aliquam. Eligendi, magnam excepturi veritatis exercitationem odio dolorem libero ut voluptatum minima distinctio tempora.<br><br>
            Earum dolorum necessitatibus facilis architecto dolores unde quas, obcaecati ut animi officia reiciendis dolore quo quidem? Velit laudantium natus aspernatur! Doloremque id ut, quas debitis iste quod non eius itaque.
            Culpa inventore qui, corporis optio, a praesentium, id maxime numquam perferendis dolorem unde asperiores eaque est saepe velit fuga tenetur molestiae. Animi sapiente voluptas asperiores ipsum, eaque modi fugiat delectus!
            Sequi quaerat nostrum tenetur deleniti maiores mollitia vel recusandae doloribus tempore, magnam earum. Iure tempora, in omnis labore sunt aliquid doloremque iste vel fugit. Reprehenderit corrupti est rerum illo maxime?
            Eum, aliquid excepturi numquam cum eos veniam id nisi suscipit, dolorum reiciendis tempore repudiandae illo? Modi officiis praesentium, ducimus veniam velit architecto explicabo sunt odio dolorem ad in ipsam sint.
            Architecto quis, molestiae odio temporibus dicta nesciunt deserunt voluptates quod ipsam at esse reprehenderit inventore? Aperiam, maiores sequi neque architecto rem iure voluptatum molestiae consequuntur itaque vero labore tenetur ducimus?
            Vero labore, facilis quis quos, dolore omnis pariatur cupiditate ducimus architecto sequi qui debitis itaque? Doloribus similique dolores praesentium. Maxime suscipit est, sint harum quas velit sed minus et nulla.
            Possimus nulla iusto, deserunt voluptate laborum fugiat mollitia amet magnam aut nam expedita aliquam corrupti repudiandae beatae fugit totam nobis vitae? Ratione sequi doloribus, blanditiis doloremque eius voluptatibus quia quod?
            Magni ducimus ullam reprehenderit laboriosam officia nam sequi. Sapiente, facilis odio tempore sequi ducimus iure at autem quam ad laborum veniam illum magni aliquam placeat, aspernatur commodi repellendus dolore laboriosam.
            Maiores atque vitae maxime fugit quidem cumque ipsum sed ipsa doloremque ratione. Beatae recusandae quaerat quisquam sint cum ipsam vero sequi nemo! Magni amet explicabo quia sunt? Ratione, officia! Magni!
            Perspiciatis, suscipit repellat. Dicta, nam molestiae. Laborum, ducimus. Voluptas omnis alias perspiciatis cumque quasi soluta sequi optio ducimus nihil necessitatibus, beatae eligendi expedita, sit incidunt tempora consequuntur, enim earum non. <br><br>
            Quidem velit voluptate sequi, doloribus nihil ratione corrupti natus, mollitia voluptatum eius maiores illo placeat? Porro, quasi doloremque natus tempore velit soluta cupiditate vero sit explicabo sint ullam libero ad!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa eos eum maiores, pariatur molestias ipsum eaque illum! Deleniti obcaecati ratione incidunt magni exercitationem accusantium. Error vel corporis animi reprehenderit!
            Labore blanditiis aperiam architecto! Natus placeat porro dolorem quos aperiam possimus. Cupiditate beatae aliquid delectus culpa sed! Eos vel incidunt aliquid amet, natus id dignissimos maiores, quam ab inventore ipsam!
            Sunt, eligendi amet iusto accusantium voluptas aspernatur reprehenderit itaque? Aut porro voluptatum voluptas sed perspiciatis, accusantium repellat quidem error, repudiandae expedita ab sit debitis corrupti nihil aliquid voluptate soluta similique.
            Numquam commodi rem laboriosam quia quo voluptates iure magnam quos, mollitia, neque rerum officia nostrum illo aliquam. Eligendi, magnam excepturi veritatis exercitationem odio dolorem libero ut voluptatum minima distinctio tempora.
            Earum dolorum necessitatibus facilis architecto dolores unde quas, obcaecati ut animi officia reiciendis dolore quo quidem? Velit laudantium natus aspernatur! Doloremque id ut, quas debitis iste quod non eius itaque.
            Culpa inventore qui, corporis optio, a praesentium, id maxime numquam perferendis dolorem unde asperiores eaque est saepe velit fuga tenetur molestiae. Animi sapiente voluptas asperiores ipsum, eaque modi fugiat delectus!
            Sequi quaerat nostrum tenetur deleniti maiores mollitia vel recusandae doloribus tempore, magnam earum. Iure tempora, in omnis labore sunt aliquid doloremque iste vel fugit. Reprehenderit corrupti est rerum illo maxime?
            Eum, aliquid excepturi numquam cum eos veniam id nisi suscipit, dolorum reiciendis tempore repudiandae illo? Modi officiis praesentium, ducimus veniam velit architecto explicabo sunt odio dolorem ad in ipsam sint.
            Architecto quis, molestiae odio temporibus dicta nesciunt deserunt voluptates quod ipsam at esse reprehenderit inventore? Aperiam, maiores sequi neque architecto rem iure voluptatum molestiae consequuntur itaque vero labore tenetur ducimus? <br><br>
            Vero labore, facilis quis quos, dolore omnis pariatur cupiditate ducimus architecto sequi qui debitis itaque? Doloribus similique dolores praesentium. Maxime suscipit est, sint harum quas velit sed minus et nulla.
            Possimus nulla iusto, deserunt voluptate laborum fugiat mollitia amet magnam aut nam expedita aliquam corrupti repudiandae beatae fugit totam nobis vitae? Ratione sequi doloribus, blanditiis doloremque eius voluptatibus quia quod?
            Magni ducimus ullam reprehenderit laboriosam officia nam sequi. Sapiente, facilis odio tempore sequi ducimus iure at autem quam ad laborum veniam illum magni aliquam placeat, aspernatur commodi repellendus dolore laboriosam.
            Maiores atque vitae maxime fugit quidem cumque ipsum sed ipsa doloremque ratione. Beatae recusandae quaerat quisquam sint cum ipsam vero sequi nemo! Magni amet explicabo quia sunt? Ratione, officia! Magni!
            Perspiciatis, suscipit repellat. Dicta, nam molestiae. Laborum, ducimus. Voluptas omnis alias perspiciatis cumque quasi soluta sequi optio ducimus nihil necessitatibus, beatae eligendi expedita, sit incidunt tempora consequuntur, enim earum non.
            Quidem velit voluptate sequi, doloribus nihil ratione corrupti natus, mollitia voluptatum eius maiores illo placeat? Porro, quasi doloremque natus tempore velit soluta cupiditate vero sit explicabo sint ullam libero ad!`,
    },
    {
      id: 3,
      image: sermon3,
      topic: 'Walking in Love',
      bibleRef: '1 Corinthians 13:4-7',
      preacher: 'Pastor Michael Bright',
      date: '2025-08-15',
      content: `Love is the foundation of true Christianity.
      This sermon teaches how to love like Christ in a divided world. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa eos eum maiores, pariatur molestias ipsum eaque illum! Deleniti obcaecati ratione incidunt magni exercitationem accusantium. Error vel corporis animi reprehenderit! Labore blanditiis aperiam architecto! Natus placeat porro dolorem quos aperiam possimus. Cupiditate beatae aliquid delectus culpa sed! Eos vel incidunt aliquid amet, natus id dignissimos maiores, quam ab inventore ipsam!<br><br>
            Sunt, eligendi amet iusto accusantium voluptas aspernatur reprehenderit itaque? Aut porro voluptatum voluptas sed perspiciatis, accusantium repellat quidem error, repudiandae expedita ab sit debitis corrupti nihil aliquid voluptate soluta similique.
            Numquam commodi rem laboriosam quia quo voluptates iure magnam quos, mollitia, neque rerum officia nostrum illo aliquam. Eligendi, magnam excepturi veritatis exercitationem odio dolorem libero ut voluptatum minima distinctio tempora.
            Earum dolorum necessitatibus facilis architecto dolores unde quas, obcaecati ut animi officia reiciendis dolore quo quidem? Velit laudantium natus aspernatur! Doloremque id ut, quas debitis iste quod non eius itaque.
            Culpa inventore qui, corporis optio, a praesentium, id maxime numquam perferendis dolorem unde asperiores eaque est saepe velit fuga tenetur molestiae. Animi sapiente voluptas asperiores ipsum, eaque modi fugiat delectus!
            Sequi quaerat nostrum tenetur deleniti maiores mollitia vel recusandae doloribus tempore, magnam earum. Iure tempora, in omnis labore sunt aliquid doloremque iste vel fugit. Reprehenderit corrupti est rerum illo maxime?
            Eum, aliquid excepturi numquam cum eos veniam id nisi suscipit, dolorum reiciendis tempore repudiandae illo? Modi officiis praesentium, ducimus veniam velit architecto explicabo sunt odio dolorem ad in ipsam sint.
            Architecto quis, molestiae odio temporibus dicta nesciunt deserunt voluptates quod ipsam at esse reprehenderit inventore? Aperiam, maiores sequi neque architecto rem iure voluptatum molestiae consequuntur itaque vero labore tenetur ducimus? <br><br>
            Vero labore, facilis quis quos, dolore omnis pariatur cupiditate ducimus architecto sequi qui debitis itaque? Doloribus similique dolores praesentium. Maxime suscipit est, sint harum quas velit sed minus et nulla.
            Possimus nulla iusto, deserunt voluptate laborum fugiat mollitia amet magnam aut nam expedita aliquam corrupti repudiandae beatae fugit totam nobis vitae? Ratione sequi doloribus, blanditiis doloremque eius voluptatibus quia quod?
            Magni ducimus ullam reprehenderit laboriosam officia nam sequi. Sapiente, facilis odio tempore sequi ducimus iure at autem quam ad laborum veniam illum magni aliquam placeat, aspernatur commodi repellendus dolore laboriosam.
            Maiores atque vitae maxime fugit quidem cumque ipsum sed ipsa doloremque ratione. Beatae recusandae quaerat quisquam sint cum ipsam vero sequi nemo! Magni amet explicabo quia sunt? Ratione, officia! Magni!
            Perspiciatis, suscipit repellat. Dicta, nam molestiae. Laborum, ducimus. Voluptas omnis alias perspiciatis cumque quasi soluta sequi optio ducimus nihil necessitatibus, beatae eligendi expedita, sit incidunt tempora consequuntur, enim earum non.
            Quidem velit voluptate sequi, doloribus nihil ratione corrupti natus, mollitia voluptatum eius maiores illo placeat? Porro, quasi doloremque natus tempore velit soluta cupiditate vero sit explicabo sint ullam libero ad! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa eos eum maiores, pariatur molestias ipsum eaque illum! Deleniti obcaecati ratione incidunt magni exercitationem accusantium. Error vel corporis animi reprehenderit!
            Labore blanditiis aperiam architecto! Natus placeat porro dolorem quos aperiam possimus. Cupiditate beatae aliquid delectus culpa sed! Eos vel incidunt aliquid amet, natus id dignissimos maiores, quam ab inventore ipsam!
            Sunt, eligendi amet iusto accusantium voluptas aspernatur reprehenderit itaque? Aut porro voluptatum voluptas sed perspiciatis, accusantium repellat quidem error, repudiandae expedita ab sit debitis corrupti nihil aliquid voluptate soluta similique.<br><br>
            Numquam commodi rem laboriosam quia quo voluptates iure magnam quos, mollitia, neque rerum officia nostrum illo aliquam. Eligendi, magnam excepturi veritatis exercitationem odio dolorem libero ut voluptatum minima distinctio tempora.
            Earum dolorum necessitatibus facilis architecto dolores unde quas, obcaecati ut animi officia reiciendis dolore quo quidem? Velit laudantium natus aspernatur! Doloremque id ut, quas debitis iste quod non eius itaque.
            Culpa inventore qui, corporis optio, a praesentium, id maxime numquam perferendis dolorem unde asperiores eaque est saepe velit fuga tenetur molestiae. Animi sapiente voluptas asperiores ipsum, eaque modi fugiat delectus!
            Sequi quaerat nostrum tenetur deleniti maiores mollitia vel recusandae doloribus tempore, magnam earum. Iure tempora, in omnis labore sunt aliquid doloremque iste vel fugit. Reprehenderit corrupti est rerum illo maxime?
            Eum, aliquid excepturi numquam cum eos veniam id nisi suscipit, dolorum reiciendis tempore repudiandae illo? Modi officiis praesentium, ducimus veniam velit architecto explicabo sunt odio dolorem ad in ipsam sint.
            Architecto quis, molestiae odio temporibus dicta nesciunt deserunt voluptates quod ipsam at esse reprehenderit inventore? Aperiam, maiores sequi neque architecto rem iure voluptatum molestiae consequuntur itaque vero labore tenetur ducimus? <br><br>
            Vero labore, facilis quis quos, dolore omnis pariatur cupiditate ducimus architecto sequi qui debitis itaque? Doloribus similique dolores praesentium. Maxime suscipit est, sint harum quas velit sed minus et nulla.
            Possimus nulla iusto, deserunt voluptate laborum fugiat mollitia amet magnam aut nam expedita aliquam corrupti repudiandae beatae fugit totam nobis vitae? Ratione sequi doloribus, blanditiis doloremque eius voluptatibus quia quod?
            Magni ducimus ullam reprehenderit laboriosam officia nam sequi. Sapiente, facilis odio tempore sequi ducimus iure at autem quam ad laborum veniam illum magni aliquam placeat, aspernatur commodi repellendus dolore laboriosam.
            Maiores atque vitae maxime fugit quidem cumque ipsum sed ipsa doloremque ratione. Beatae recusandae quaerat quisquam sint cum ipsam vero sequi nemo! Magni amet explicabo quia sunt? Ratione, officia! Magni!
            Perspiciatis, suscipit repellat. Dicta, nam molestiae. Laborum, ducimus. Voluptas omnis alias perspiciatis cumque quasi soluta sequi optio ducimus nihil necessitatibus, beatae eligendi expedita, sit incidunt tempora consequuntur, enim earum non.
            Quidem velit voluptate sequi, doloribus nihil ratione corrupti natus, mollitia voluptatum eius maiores illo placeat? Porro, quasi doloremque natus tempore velit soluta cupiditate vero sit explicabo sint ullam libero ad!`,
    },
    {
      id: 4,
      image: sermon3,
      topic: 'Walking in Love',
      bibleRef: '1 Corinthians 13:4-7',
      preacher: 'Pastor Michael Bright',
      date: '2025-08-15',
      content: `Love is the foundation of true Christianity.
      This sermon teaches how to love like Christ in a divided world. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa eos eum maiores, pariatur molestias ipsum eaque illum! Deleniti obcaecati ratione incidunt magni exercitationem accusantium. Error vel corporis animi reprehenderit! <br> <br>
            Labore blanditiis aperiam architecto! Natus placeat porro dolorem quos aperiam possimus. Cupiditate beatae aliquid delectus culpa sed! Eos vel incidunt aliquid amet, natus id dignissimos maiores, quam ab inventore ipsam!
            Sunt, eligendi amet iusto accusantium voluptas aspernatur reprehenderit itaque? Aut porro voluptatum voluptas sed perspiciatis, accusantium repellat quidem error, repudiandae expedita ab sit debitis corrupti nihil aliquid voluptate soluta similique.
            Numquam commodi rem laboriosam quia quo voluptates iure magnam quos, mollitia, neque rerum officia nostrum illo aliquam. Eligendi, magnam excepturi veritatis exercitationem odio dolorem libero ut voluptatum minima distinctio tempora.
            Earum dolorum necessitatibus facilis architecto dolores unde quas, obcaecati ut animi officia reiciendis dolore quo quidem? Velit laudantium natus aspernatur! Doloremque id ut, quas debitis iste quod non eius itaque.
            Culpa inventore qui, corporis optio, a praesentium, id maxime numquam perferendis dolorem unde asperiores eaque est saepe velit fuga tenetur molestiae. Animi sapiente voluptas asperiores ipsum, eaque modi fugiat delectus!
            Sequi quaerat nostrum tenetur deleniti maiores mollitia vel recusandae doloribus tempore, magnam earum. Iure tempora, in omnis labore sunt aliquid doloremque iste vel fugit. Reprehenderit corrupti est rerum illo maxime?
            Eum, aliquid excepturi numquam cum eos veniam id nisi suscipit, dolorum reiciendis tempore repudiandae illo? Modi officiis praesentium, ducimus veniam velit architecto explicabo sunt odio dolorem ad in ipsam sint.
            Architecto quis, molestiae odio temporibus dicta nesciunt deserunt voluptates quod ipsam at esse reprehenderit inventore? Aperiam, maiores sequi neque architecto rem iure voluptatum molestiae consequuntur itaque vero labore tenetur ducimus? <br><br>
            Vero labore, facilis quis quos, dolore omnis pariatur cupiditate ducimus architecto sequi qui debitis itaque? Doloribus similique dolores praesentium. Maxime suscipit est, sint harum quas velit sed minus et nulla.
            Possimus nulla iusto, deserunt voluptate laborum fugiat mollitia amet magnam aut nam expedita aliquam corrupti repudiandae beatae fugit totam nobis vitae? Ratione sequi doloribus, blanditiis doloremque eius voluptatibus quia quod?
            Magni ducimus ullam reprehenderit laboriosam officia nam sequi. Sapiente, facilis odio tempore sequi ducimus iure at autem quam ad laborum veniam illum magni aliquam placeat, aspernatur commodi repellendus dolore laboriosam.
            Maiores atque vitae maxime fugit quidem cumque ipsum sed ipsa doloremque ratione. Beatae recusandae quaerat quisquam sint cum ipsam vero sequi nemo! Magni amet explicabo quia sunt? Ratione, officia! Magni!
            Perspiciatis, suscipit repellat. Dicta, nam molestiae. Laborum, ducimus. Voluptas omnis alias perspiciatis cumque quasi soluta sequi optio ducimus nihil necessitatibus, beatae eligendi expedita, sit incidunt tempora consequuntur, enim earum non.<br><br>
            Quidem velit voluptate sequi, doloribus nihil ratione corrupti natus, mollitia voluptatum eius maiores illo placeat? Porro, quasi doloremque natus tempore velit soluta cupiditate vero sit explicabo sint ullam libero ad!`,
    },
    {
      id: 5,
      image: sermon3,
      topic: 'Walking in Love',
      bibleRef: '1 Corinthians 13:4-7',
      preacher: 'Pastor Michael Bright',
      date: '2025-08-15',
      content: `Love is the foundation of true Christianity.
      This sermon teaches how to love like Christ in a divided world. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa eos eum maiores, pariatur molestias ipsum eaque illum! Deleniti obcaecati ratione incidunt magni exercitationem accusantium. Error vel corporis animi reprehenderit!
            Labore blanditiis aperiam architecto! Natus placeat porro dolorem quos aperiam possimus. Cupiditate beatae aliquid delectus culpa sed! Eos vel incidunt aliquid amet, natus id dignissimos maiores, quam ab inventore ipsam!
            Sunt, eligendi amet iusto accusantium voluptas aspernatur reprehenderit itaque? Aut porro voluptatum voluptas sed perspiciatis, accusantium repellat quidem error, repudiandae expedita ab sit debitis corrupti nihil aliquid voluptate soluta similique.<br><br>
            Numquam commodi rem laboriosam quia quo voluptates iure magnam quos, mollitia, neque rerum officia nostrum illo aliquam. Eligendi, magnam excepturi veritatis exercitationem odio dolorem libero ut voluptatum minima distinctio tempora.
            Earum dolorum necessitatibus facilis architecto dolores unde quas, obcaecati ut animi officia reiciendis dolore quo quidem? Velit laudantium natus aspernatur! Doloremque id ut, quas debitis iste quod non eius itaque.
            Culpa inventore qui, corporis optio, a praesentium, id maxime numquam perferendis dolorem unde asperiores eaque est saepe velit fuga tenetur molestiae. Animi sapiente voluptas asperiores ipsum, eaque modi fugiat delectus!
            Sequi quaerat nostrum tenetur deleniti maiores mollitia vel recusandae doloribus tempore, magnam earum. Iure tempora, in omnis labore sunt aliquid doloremque iste vel fugit. Reprehenderit corrupti est rerum illo maxime?
            Eum, aliquid excepturi numquam cum eos veniam id nisi suscipit, dolorum reiciendis tempore repudiandae illo? Modi officiis praesentium, ducimus veniam velit architecto explicabo sunt odio dolorem ad in ipsam sint.
            Architecto quis, molestiae odio temporibus dicta nesciunt deserunt voluptates quod ipsam at esse reprehenderit inventore? Aperiam, maiores sequi neque architecto rem iure voluptatum molestiae consequuntur itaque vero labore tenetur ducimus?<br><br>
            Vero labore, facilis quis quos, dolore omnis pariatur cupiditate ducimus architecto sequi qui debitis itaque? Doloribus similique dolores praesentium. Maxime suscipit est, sint harum quas velit sed minus et nulla.
            Possimus nulla iusto, deserunt voluptate laborum fugiat mollitia amet magnam aut nam expedita aliquam corrupti repudiandae beatae fugit totam nobis vitae? Ratione sequi doloribus, blanditiis doloremque eius voluptatibus quia quod?
            Magni ducimus ullam reprehenderit laboriosam officia nam sequi. Sapiente, facilis odio tempore sequi ducimus iure at autem quam ad laborum veniam illum magni aliquam placeat, aspernatur commodi repellendus dolore laboriosam.
            Maiores atque vitae maxime fugit quidem cumque ipsum sed ipsa doloremque ratione. Beatae recusandae quaerat quisquam sint cum ipsam vero sequi nemo! Magni amet explicabo quia sunt? Ratione, officia! Magni!
            Perspiciatis, suscipit repellat. Dicta, nam molestiae. Laborum, ducimus. Voluptas omnis alias perspiciatis cumque quasi soluta sequi optio ducimus nihil necessitatibus, beatae eligendi expedita, sit incidunt tempora consequuntur, enim earum non.<br><br>
            Quidem velit voluptate sequi, doloribus nihil ratione corrupti natus, mollitia voluptatum eius maiores illo placeat? Porro, quasi doloremque natus tempore velit soluta cupiditate vero sit explicabo sint ullam libero ad!`,
    },
  ];

  // Filtering logic
  const filteredSermons = sermons.filter((sermon) => {
    const matchSearch =
      sermon.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.bibleRef.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter =
      filter === 'all' ? true : sermon.preacher === filter;
    return matchSearch && matchFilter;
  });

  return (
    <main className="sermons-page">
      <div className="container">
        <h2 className="page-title">🎧 Sermons</h2>

        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by topic, preacher, or verse..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Preachers</option>
            <option value="Pastor John Doe">Pastor John Doe</option>
            <option value="Pastor Jane Smith">Pastor Jane Smith</option>
            <option value="Pastor Michael Bright">Pastor Michael Bright</option>
          </select>
        </div>

        <div className="sermons-grid">
          {filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="sermon-card"
            >
              <div className="sermon-img">
                <img src={sermon.image} alt={sermon.topic} />
              </div>
              <div className="sermon-info">
                <h3>{sermon.topic}</h3>
                <p><strong>{sermon.bibleRef}</strong></p>
                <p>{sermon.preacher}</p>
                <p className="date">{sermon.date}</p>
                <button onClick={() => setSelectedSermon(sermon)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSermon && (
        <div className="modal-overlay" onClick={() => setSelectedSermon(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedSermon(null)}>✖</button>
            <img src={selectedSermon.image} alt={selectedSermon.topic} />
            <h2>{selectedSermon.topic}</h2>
            <p><strong>{selectedSermon.bibleRef}</strong></p>
            <p><em>{selectedSermon.preacher}</em></p>
            {/* <p>{selectedSermon.content}</p> */}
            <div
              className="sermon-body"
              dangerouslySetInnerHTML={{ __html: selectedSermon.content }}
            ></div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Sermons;
