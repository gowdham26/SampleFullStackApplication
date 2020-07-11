package com.practice.MemorySharingGame.controller;

import com.practice.MemorySharingGame.gateway.SMSGateway;
import com.practice.MemorySharingGame.model.MemoryData;
import com.practice.MemorySharingGame.repositiory.IMemoryDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@RequestMapping("/api/play/sharememory")
public class MemorySharingGameController {

    @Autowired
    private IMemoryDataRepository memorySharingGameRepository;
    @Value("${angular.app.url}")
    private String angularAppUrl;

    @Autowired
    SMSGateway smsGateway = new SMSGateway();

    @PostMapping
    public void saveAndShareMemoryLink(@RequestBody MemoryData memoryData) throws Exception{
        Random rand = new Random();
        final int id = rand.nextInt();
        final String url = angularAppUrl + id;
        memoryData.setId(id);
        memoryData.setUrlLink(url);
        memorySharingGameRepository.save(memoryData);
        smsGateway.sendMessage(memoryData,true);
    }

    @PutMapping("/{id}")
    public void updateAndShareGuessedPerson(@RequestBody MemoryData memoryData,
                                                 @PathVariable("id") long id) throws Exception{
        MemoryData memoryDataUpdate = memorySharingGameRepository.getOne(id);
        memoryDataUpdate.setGuessPerson(memoryData.getGuessPerson());
        memorySharingGameRepository.save(memoryDataUpdate);
        smsGateway.sendMessage(memoryDataUpdate,false);
        // after this point, no need to store this data so deleting it
        memorySharingGameRepository.delete(memoryDataUpdate);
    }

    @GetMapping("/{id}")
    public MemoryData getMemoryData(@PathVariable("id") long id) {
        return memorySharingGameRepository.getOne(id);
    }
}
