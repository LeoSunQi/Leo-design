import { Button, ButtonProps, Card } from 'leo'

const Overview = () => {
  const btns = [
    {
      color: 'primary',
      className: 'mx-[6px]'
    },
    {
      color: 'success',
      className: 'mx-[5px]'
    },
    {
      color: 'warning',
      className: 'mx-[4px]'
    },
    {
      color: 'danger',
      className: 'mx-[3px]'
    },
    {
      color: 'info',
      className: 'mx-[2px]'
    }
  ]
  return (
    <div className='w-full h-full'>
      <Card header="Button" border shadow='hover' className="w-full">
        <div className="container text-center">
          {btns.map((item, i) => {
            const { color, className } = item as ButtonProps
            return (
              <div className="m-6" key={i}>
                <Button color={color} className={className}>
                  primary
                </Button>
                <Button color={color} size="large" round className={className}>
                  large
                </Button>
                <Button
                  color={color}
                  size="small"
                  round
                  disabled
                  className={className}
                >
                  small
                </Button>
                <Button
                  color={color}
                  size="small"
                  plain
                  round
                  disabled
                  className={className}
                >
                  disabled
                </Button>
                <Button
                  color={color}
                  size="large"
                  plain
                  round
                  className={className}
                >
                  round
                </Button>
                <Button color={color} plain className={className}>
                  plain
                </Button>
              </div>
            )
          })}

          <div className="m-6">
            <Button className="mx-1">default</Button>
            <Button text className="mx-1">
              text
            </Button>
            <Button link className="mx-1">
              link
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

Overview.displayName = 'Leo.Overview'

export default Overview
