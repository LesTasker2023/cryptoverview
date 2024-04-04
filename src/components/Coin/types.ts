interface CoinDetails {
  id?: number | null;
  name?: string | null;
  symbol?: string | null;
  slug?: string | null;
  num_market_pairs?: number | null;
  date_added?: string | null;
  tags?: string[] | null;
  max_supply?: number | null;
  circulating_supply?: number | null;
  total_supply?: number | null;
  infinite_supply?: boolean | null;
  platform?: unknown | null; // You can define a specific interface for the platform if needed
  cmc_rank?: number | null;
  self_reported_circulating_supply?: unknown | null; // Define a specific type if needed
  self_reported_market_cap?: unknown | null; // Define a specific type if needed
  tvl_ratio?: unknown | null; // Define a specific type if needed
  last_updated?: string | null;
  quote?: {
    USD?: {
      price?: number | null;
      volume_24h?: number | null;
      volume_change_24h?: number | null;
      percent_change_1h?: number | null;
      percent_change_24h?: number | null;
      percent_change_7d?: number | null;
      percent_change_30d?: number | null;
      percent_change_60d?: number | null;
      percent_change_90d?: number | null;
      market_cap?: number | null;
      market_cap_dominance?: number | null;
      fully_diluted_market_cap?: number | null;
      tvl?: unknown | null; // Define a specific type if needed
      last_updated?: string | null;
    };
  };
  coinLogoUrl: string;
}

export default CoinDetails;
