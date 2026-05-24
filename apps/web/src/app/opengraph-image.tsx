/*
 *  author: Yagnik Poshiya
 *  github: https://github.com/neuroworklabs/Neurons
 */

import {
  createHomeOpenGraphImage,
  homeOpenGraphImageAlt,
  homeOpenGraphImageContentType,
  homeOpenGraphImageSize,
} from '@/lib/site/home-opengraph-image';

export const runtime = 'nodejs';

export const alt = homeOpenGraphImageAlt;
export const size = homeOpenGraphImageSize;
export const contentType = homeOpenGraphImageContentType;

export default async function OpenGraphImage() {
  return createHomeOpenGraphImage();
}
