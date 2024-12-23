import { memo } from 'react'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { Link } from '~/types'
import { LinkPosition } from '..'
import { LineComponent } from './LineComponent'

type Props = {
  linksPosition: Map<string, LinkPosition>
}

export const Connections = memo(({ linksPosition }: Props) => {
  const data = useDataStore((s) => s.dataInitial)
  const { showSelectionGraph } = useGraphStore((s) => s)

  return (
    <group name="simulation-3d-group__connections" visible={!showSelectionGraph}>
      {data?.links.map((l: Link) => {
        const position = linksPosition.get(l.ref_id) || {
          sx: 0,
          sy: 0,
          sz: 0,
          tx: 0,
          ty: 0,
          tz: 0,
        }

        return (
          <LineComponent
            key={l.ref_id}
            label={l.edge_type}
            source={l.source}
            sourceX={position.sx}
            sourceY={position.sy}
            sourceZ={position.sz}
            target={l.target}
            targetX={position.tx}
            targetY={position.ty}
            targetZ={position.tz}
          />
        )
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
