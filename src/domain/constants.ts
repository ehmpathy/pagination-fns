import { PickOne } from 'type-fns';

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
 *   - the page.range will specify the order to sort the items on the page with
 *     - .since => sort asc
 *     - .until => sort desc
 *     - .uptil => sort desc
 *
 * todo
 * - support range having more than one filter
 */
export type PaginationInput<TRangeShape> = {
  /**
   * the range of items to include in this page
   */
  range: PickOne<{
    /**
     * .what = filter to items with values of this range key
     *   - filter on `item.value >= since.value`
     *   - order on values ASC
     */
    since: TRangeShape;

    /**
     * .what = filter to items with values of this range key
     *   - filter on `item.value < since.value`
     *   - order on values DESC
     */
    until: TRangeShape;

    /**
     * .what = filter to items with values of this range key
     *   - filter on `item.value <= since.value`
     *   - order on values DESC
     */
    uptil: TRangeShape;
  }>;

  /**
   * the limit of items to include in this page
   */
  limit: number;
};
