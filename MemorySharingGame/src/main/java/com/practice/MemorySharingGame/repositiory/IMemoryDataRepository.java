package com.practice.MemorySharingGame.repositiory;

import com.practice.MemorySharingGame.model.MemoryData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMemoryDataRepository extends JpaRepository<MemoryData,Long> {
}
