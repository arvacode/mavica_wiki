import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Whether you're exploring your first Mavica or adding to your collection, this wiki is here to help you answer your questions.
      </>
    ),
  },
  {
    title: 'Browse',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Discover the full range of Mavica models and resources. This wiki makes it easy to browse through curated content and find exactly what you need.
      </>
    ),
  },
  {
    title: 'Contribute',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Join our community and share your expertise. Help grow this wiki by contributing insights, tips, and updates to make it even more valuable.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
