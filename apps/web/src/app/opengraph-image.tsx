/*
 *  author: Yagnik Poshiya
 *  github: https://github.com/neuroworklabs/Neurons
 */

import {
  createHomeOpenGraphImage,
} from '@/components/home/home-opengraph-image';
import {
  homeOpenGraphImageAlt,
  homeOpenGraphImageContentType,
  homeOpenGraphImageSize,
} from '@/lib/site/opengraph-image-config';

export const runtime = 'nodejs';

export const alt = homeOpenGraphImageAlt;
export const size = homeOpenGraphImageSize;
export const contentType = homeOpenGraphImageContentType;

export default async function OpenGraphImage() {
  return createHomeOpenGraphImage();
}
