# Snowplow custom contexts

## VWO

// TODO: Add more details here

### Example usage

```
    window.snowplow('trackPageView', null,
        [{
            schema: 'https://cdn.jsdelivr.net/gh/catchco/snowplow-schemas@1.0/vwo.json',
            data: {
                tests: getVwoTests()
            }
        }]
    );
```

## Related reading

* [Fivetran's Snowplow documentation](https://fivetran.com/docs/events/snowplow)
* [Fivetran's example snowplow custom contexts](https://github.com/fivetran/snowplow-schemas)
* [How to add VWO test variants to your Snowplow Analytics data](https://www.themarketingtechnologist.co/how-to-add-vwo-test-variants-to-your-snowplow-analytics-data/)