import {Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';

export default function ProductItem({product}) {
  return (
    <Link
      key={product.id}
      className="recommended-product"
      to={`/products/${product.handle}`}
    >
      <Image
        data={product.images.nodes[0]}
        aspectRatio="1/1"
        sizes="(min-width: 45em) 20vw, 50vw"
      />
      <h4>{product.title}</h4>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
      <span>Hello Product Item Component</span>
    </Link>
  );
}
