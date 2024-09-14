import { PickAny, PickOne } from 'type-fns';

/**
 * .what = the shape of pagination request inputs
 * .what.terms
 *   - pagination = the ability to "page" through many results, sequentially
 *   - range = a range of values of an attribute over which the page will include results
 * .what.context
 *   - the page.range will specify the value to start the page from
 *     - .since => `>=`
 *     - .until => `<`
 *     - .uptil => `<=`
 *   - the page.order will specify the order to sort the items on the page with
 *     - asc | desc
 *
 * todo
 * - support range having more than one filter
 */
export type PaginationInput<TRangeShape> = {
  /**
   * the range of items to include in this page
   */
  range: PickAny<{
    /**
     * .what = filter to items with values of this range key
     *   - filter on `item.value >= since.value`
     */
    since: TRangeShape;

    /**
     * .what = filter to items with values of this range key
     *   - filter on `item.value < since.value`
     */
    until: TRangeShape;

    /**
     * .what = filter to items with values of this range key
     *   - filter on `item.value <= since.value`
     */
    uptil: TRangeShape;
  }>;

  /**
   * the order with which to sort on the range key
   */
  order: 'ASC' | 'DESC';

  /**
   * the limit of items to include in this page
   */
  limit: number;
};
