package types

import "time"

const (
	// ModuleName defines the module name
	ModuleName = "checkers"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_checkers"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	GameCreatedEventType       = "new-game-created" // Indicates what event type to listen to
	GameCreatedEventCreator    = "creator"          // Subsidiary information
	GameCreatedEventGameIndex  = "game-index"       // What game is relevant
	GameCreatedEventBlack      = "black"            // Is it relevant to me?
	GameCreatedEventRed        = "red"              // Is it relevant to me?
	NextGameKey                = "NextGame-value-"
	StoredGameEventKey         = "NewGameCreated" // Indicates what key to listen to
	StoredGameEventCreator     = "Creator"
	StoredGameEventIndex       = "Index" // What game is relevant
	StoredGameEventRed         = "Red"   // Is it relevant to me?
	StoredGameEventBlack       = "Black" // Is it relevant to me?
	GameRejectedEventType      = "game-rejected"
	GameRejectedEventCreator   = "creator"
	GameRejectedEventGameIndex = "game-index"
	MovePlayedEventCreator     = "creator"
	MovePlayedEventGameIndex   = "game-index"
	MovePlayedEventCapturedX   = "captured-x"
	MovePlayedEventCapturedY   = "captured-y"
	MovePlayedEventWinner      = "winner"
	NoFifoIndex                = "-1"
)

const (
	MaxTurnDuration = time.Duration(5 * 60 * 1000_000_000) // 1 day
	DeadlineLayout  = "2006-01-02 15:04:05.999999999 +0000 UTC"
)
const (
	MovePlayedEventType  = "move-played"
	MovePlayedEventBoard = "board"
)

const (
	GameForfeitedEventType      = "game-forfeited"
	GameForfeitedEventGameIndex = "game-index"
	GameForfeitedEventWinner    = "winner"
	GameForfeitedEventBoard     = "board"
)
